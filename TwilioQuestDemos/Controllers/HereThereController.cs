using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio;
using Twilio.TwiML;
using Twilio.TwiML.Mvc;

namespace TwilioQuestDemos.Controllers
{
    public class HereThereController : TwilioController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Here(string CallSid)
        {
            var response = new TwilioResponse();
            response.Say("You've arrived here.  And now some music.");
            response.Play(Url.ContentAbsolute(false, "/Content/Audio/02-overworld.mp3"), new { loop = "0" });

            return TwiML(response);
        }

        public ActionResult RedirectFromHere(string From)
        {
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            //lookup the live call by phone number
            var result = client.ListCalls(new CallListRequest() { From = From, Status="in-progress" });

            if (result.RestException != null)
            {
                return new System.Web.Mvc.HttpStatusCodeResult(HttpStatusCode.InternalServerError, result.RestException.Message);
            }

            var call = result.Calls.FirstOrDefault();

            if (call == null)
            {
                return new System.Web.Mvc.HttpStatusCodeResult(HttpStatusCode.InternalServerError, "A problem occurred locating the correct call.");
            }

            var redirected = client.RedirectCall(call.Sid, new CallOptions() { Url = Url.Action("HereThere", "There", null, "http") });
            if (redirected.RestException!=null)
            {
                return new System.Web.Mvc.HttpStatusCodeResult(HttpStatusCode.InternalServerError, string.Format(result.RestException.Message));
            }

            return Json(new { result = true });
        }

        public ActionResult There()
        {
            var response = new TwilioResponse();
            response.Say("You made it there!  Thanks for playing.");
            return TwiML(response);

        }

        //public ActionResult Phone()
        //{
        //    return View();
        //}

        //public ActionResult CallerAConference(string CallSid)
        //{
        //    var response = new TwilioResponse();
        //    response.Say("Hold on while we conjure an agent");
        //    response.DialConference(CallSid);

        //    var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);


        //    return TwiML(response);
        //}

        //public ActionResult CallerBConference(string CallSid)
        //{
        //    var response = new TwilioResponse();
        //    response.Say("Hold on while we conjure an agent");
        //    response.DialConference(CallSid);
        //    return TwiML(response);
        //}

        //public ActionResult RedirectOutOfConference(string CallSid)
        //{
        //    var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

        //    client.RedirectCall(CallSid, new CallOptions() { Url = Url.Action("Here", "There", null, "http") });

        //    return new EmptyResult();
        //}

        //public ActionResult There()
        //{
        //    var response = new TwilioResponse();
        //    response.Say("You made it there!");
        //    return TwiML(response);
        //}

    }
}

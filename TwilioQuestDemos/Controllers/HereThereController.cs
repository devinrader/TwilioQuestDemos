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
            response.Play("", new { loop = "0" });

            return TwiML(response);
        }

        public ActionResult RedirectFromHere(string From)
        {
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            //lookup the live call by phone number
            var result = client.ListCalls(new CallListRequest() { From = "", Status="in-progress" });

            if (result.RestException == null)
            {
                var call = result.Calls.FirstOrDefault();

                if (call == null)
                {

                }
                else
                {
                    client.RedirectCall(call.Sid, new CallOptions() { Url = Url.Action("HereThere", "There", null, "http") });
                }
            }

            return Json(true);
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

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
    public class HereController : TwilioController
    {
        public ActionResult PlaceIntoConference()
        {
            var response = new TwilioResponse();
            response.Say("Please while while we conjure an agent");
            response.DialConference(CallSid);
            return TwiML(response);
        }

        public ActionResult RedirectOutOfConference()
        {
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            client.RedirectCall("", new CallOptions() { Url = Url.Action("Here", "There", null, "http") });

            return new EmptyResult();
        }

        public ActionResult There()
        {
            var response = new TwilioResponse();
            response.Say("You made it there!");
            return TwiML(response);
        }

    }
}

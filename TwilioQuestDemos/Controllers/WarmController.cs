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
    public class WarmController : TwilioController
    {
        public ActionResult Customer(string CallSid)
        {
            var response = new TwilioResponse();

            response.Say("Please while while we conjure a support agent");
            response.DialConference(CallSid);

            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);
            client.InitiateOutboundCall("[]", "[]", Url.Action("Warm", "ConnectToCaller", null, "http"));

            return TwiML(response);
        }

        public ActionResult ConnectToCaller(string CallerSid)
        {
            var response = new TwilioResponse();

            response.Say("An adventure is requesting assistance.  Connect you now");
            response.DialConference(CallerSid);

            return TwiML(response);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio.TwiML;
using Twilio.TwiML.Mvc;

namespace TwilioQuestDemos.Controllers
{
    public class FallbackController : TwilioController
    {
        public ActionResult BadResponse()
        {
            var response = new TwilioResponse();
            response.Say("This call will self destruct in 5 seconds");
            response.Pause(5);
            response.Redirect(Url.Action("Boom", "Fallback", null, "http"));
            return TwiML(response);
        }

        public ActionResult Boom()
        {
            Response.ContentType = "application/xml";

            //hand craft a bad twiml response
            string bad = "<Response><BadTag>This tag is bad.  Very bad.</Response>";

            return Content(bad);
        }

        public ActionResult GoodResponse()
        {
            var response = new TwilioResponse();
            response.Say("Oops.  Looks like a glitch in the kingdom.  Maybe try casting a different spell later.");
            return TwiML(response);
        }
    }
}

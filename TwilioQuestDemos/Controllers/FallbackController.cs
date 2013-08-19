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
            Response.ContentType = "application/xml";
            //hand craft a bad twiml response

            string bad = "<Response><Say>This represents some invalid TwiML<BadTag>This tag is bad.  Very bad.</BadTag></Response>";
            
            return Content(bad);
        }

        public ActionResult GoodResponse()
        {
            var response = new TwilioResponse();
            response.Say("Opps.  Looks like a gitch in the kingdom.  Maybe try a different spell later.");
            return TwiML(response);
        }
    }
}

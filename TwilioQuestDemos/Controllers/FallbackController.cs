using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio.TwiML.Mvc;

namespace TwilioQuestDemos.Controllers
{
    public class FallbackController : TwilioController
    {
        public ActionResult BadResponse()
        {
            //hand craft a bad twiml response

            return new EmptyResult();
        }

        public ActionResult FallbackHandler()
        {
            var response = new TwilioResponse();
            return TwiML(response);
        }
    }
}

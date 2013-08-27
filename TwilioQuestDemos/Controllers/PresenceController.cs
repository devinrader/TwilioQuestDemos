using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio;

namespace TwilioQuestDemos.Controllers
{
    public class PresenceController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Token(string clientName)
        {
            var capability = new TwilioCapability(Credentials.AccountSid, Credentials.AuthToken);
            capability.AllowClientIncoming(clientName);
            capability.AllowClientOutgoing("AP08b4c661205ac48c6e896a83fc12aec1");
            var token = capability.GenerateToken();

            return Content(token);
        }
    }
}

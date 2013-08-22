using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio.TwiML;
using Twilio.TwiML.Mvc;
using TwilioQuestDemos.Hubs;

namespace TwilioQuestDemos.Controllers
{
    public class CallbackController : TwilioController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Connect()
        {
            var response = new TwilioResponse();
            response.Say("This is a test phone call");
            return TwiML(response);

        }

        public ActionResult Notify(string CallDuration, string From, string To, string CallStatus)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<Callback>();
            context.Clients.All.triggerNotification(From, To, CallStatus, CallDuration);

            return new EmptyResult();
        }
    }
}

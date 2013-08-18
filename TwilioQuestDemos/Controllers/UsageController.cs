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
    public class UsageController : Controller
    {
        public ActionResult Triggers()
        {
            //create a new trigger 
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            var result = client.ListUsageTriggers();
            if (result.RestException == null)
            {
                var trigger = result.UsageTriggers.FirstOrDefault(u=>u.FriendlyName=="Chapter13Trigger");

                if (trigger == null)
                {
                    //if it does not already exist, create a new trigger
                    // this is likely going to exist already

                    //can I create a trigger that just fires ever N messages?
                    var t = client.CreateUsageTrigger(new UsageTriggerOptions() { 
                     UsageCategory="sms",
                     FriendlyName= "Chapter13Trigger",
                     CallbackUrl = Url.Action("Usage", "TriggerCallbackHandler", null, "http")
                    });
                }
            }
                     
            return View();            
        }

        public ActionResult TriggerCallbackHandler()
        {
            //use signalr to update a view
            return new EmptyResult();
        }
    }
}

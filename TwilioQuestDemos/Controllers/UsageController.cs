using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio;
using TwilioQuestDemos.Hubs;

namespace TwilioQuestDemos.Controllers
{
    public class UsageController : Controller
    {
        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult Records(string usageType, string interval, string startDate, string endDate)
        {
            Console.WriteLine(usageType);

            bool _flag = true;
            List<dynamic> _usageRecords = new List<dynamic>();
            int _page = 0;

            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            while (_flag)
            {
                var result = client.ListUsage(usageType, interval, DateTime.Parse(startDate), DateTime.Parse(endDate), _page, 50);

                _usageRecords.AddRange(result.UsageRecords);

                if ((result.Page + 1) >= result.NumPages)
                {
                    _flag = false;
                    continue;
                }

                _page++;
            }

            return Json(JsonConvert.SerializeObject(_usageRecords), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Triggers()
        {
            ViewBag.triggerState = "exists";
            if (FindTrigger() == null)
            {
                CreateTrigger();
                ViewBag.triggerState = "created";
            }

            return View();            
        }

        public ActionResult TriggerCallbackHandler(string UsageTriggerSid, string DateFired, string UsageCategory, string TriggerBy, string TriggerValue, string CurrentUsageValue, string IdempotencyToken)
        {
            var token = System.Web.HttpContext.Current.Cache["idempotencyToken"];

            if (token != null) {
                if (token.ToString() == IdempotencyToken) {
                    return new EmptyResult();                
                }
            }

            System.Web.HttpContext.Current.Cache["idempotencyToken"] = IdempotencyToken;

            var context = GlobalHost.ConnectionManager.GetHubContext<Trigger>();
            context.Clients.All.triggerNotification(UsageTriggerSid, DateFired, UsageCategory, TriggerBy, TriggerValue, CurrentUsageValue);

            Console.WriteLine("Trigger Fired");

            if (!string.IsNullOrEmpty(UsageTriggerSid))
            {
                DeleteTrigger(UsageTriggerSid);
                CreateTrigger();
            }

            return new EmptyResult();
        }

        public ActionResult Clear()
        {
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            int counter = 0;

            var result = client.ListUsageTriggers();
            if (result.RestException == null)
            {
                foreach (var t in result.UsageTriggers)
                {
                    client.DeleteUsageTrigger(t.Sid);
                    counter++;
                }
            }

            return Content("Triggers deleted: " + counter.ToString());
        }


        private string FindTrigger()
        {
            //create a new trigger 
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            var result = client.ListUsageTriggers();
            if (result.RestException == null)
            {
                var trigger = result.UsageTriggers.FirstOrDefault(u => u.FriendlyName == "Chapter13Trigger");

                if (trigger != null)
                {
                    return trigger.Sid;
                }
            }

            return null;
        }

        private void CreateTrigger()
        {
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            var trigger = client.CreateUsageTrigger(new UsageTriggerOptions()
            {
                UsageCategory = "sms-inbound",
                FriendlyName = "Chapter13Trigger",
                TriggerBy = "usage",
                TriggerValue = "+3",
                CallbackUrl = Url.ActionAbsolute("TriggerCallbackHandler")
            });

            if (trigger.RestException != null)
            {
                Console.WriteLine(trigger.RestException.Message);
            }
        }

        private void DeleteTrigger(string sid)
        {
            var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);

            var result = client.DeleteUsageTrigger(sid);

            if (result == DeleteStatus.Failed)
            {
                Console.WriteLine("Delete Failed");
            }
        }

    }
}

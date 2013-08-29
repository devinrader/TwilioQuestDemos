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
using TwilioQuestDemos.Models;
using System.Threading.Tasks;
using RestSharp;
using Microsoft.WindowsAzure.MobileServices;
using Microsoft.AspNet.SignalR;
using TwilioQuestDemos.Hubs;

namespace TwilioQuestDemos.Controllers
{
    public class WarmController : TwilioController
    {
        MobileServiceRequestHelper<WarmCall> helper = new MobileServiceRequestHelper<WarmCall>("warmCalls");

        public static MobileServiceClient MobileService = new MobileServiceClient("https://twoconferences.azure-mobile.net/", "aNVmMdxUUyFSVTsRslVIlRNvxAUZzY46");

        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> SaveWarmHandoffConfiguration(string customerPhone, string agentOnePhone, string agentTwoPhone)
        {            
            IMobileServiceTable<WarmCall> warmCallTable = MobileService.GetTable<WarmCall>();

            var util = PhoneNumbers.PhoneNumberUtil.GetInstance();

            PhoneNumbers.PhoneNumber tmp;
            tmp = util.Parse(customerPhone, "US");
            customerPhone = util.Format(tmp, PhoneNumbers.PhoneNumberFormat.E164).ToString();

            tmp = util.Parse(agentOnePhone, "US");
            agentOnePhone = util.Format(tmp, PhoneNumbers.PhoneNumberFormat.E164).ToString();

            tmp = util.Parse(agentTwoPhone, "US");
            agentTwoPhone = util.Format(tmp, PhoneNumbers.PhoneNumberFormat.E164).ToString();


            var warmCall = new WarmCall() { CustomerPhone = customerPhone, AgentOnePhone = agentOnePhone, AgentTwoPhone = agentTwoPhone };
            await warmCallTable.InsertAsync(warmCall);

            ViewBag.customerPhone = customerPhone;
            ViewBag.agentTwoPhone = agentTwoPhone;

            return View();
        }

        public async Task<ActionResult> Clear()
        {
            IMobileServiceTable<WarmCall> warmCallTable = MobileService.GetTable<WarmCall>();
            var warmCalls = await warmCallTable.ReadAsync();

            int counter = 0;
            foreach (var warmCall in warmCalls)
            {
                await warmCallTable.DeleteAsync(warmCall);
                counter++;
            }

            return Content("WarmCalls Deleted: " + counter.ToString());
        }

        public async Task<ActionResult> HandleCustomerCall(string CallSid, string From)
        {
            var response = new TwilioResponse();

            //check the caller ID and try to find a call config that matches it
            IMobileServiceTable<WarmCall> warmCallTable = MobileService.GetTable<WarmCall>();
            var warmCalls = await warmCallTable.ReadAsync<WarmCall>(warmCallTable.Where(w => w.CustomerPhone == From));

            var warmCall = warmCalls.FirstOrDefault();
            if (warmCall != null)
            {
                //update with the call sid
                warmCall.CustomerCallSid = CallSid;
                await warmCallTable.UpdateAsync(warmCall);

                //put the customer into a conference
                response.Say("Please while while we conjure a support agent");
                response.DialConference(CallSid);

                //dial an agent
                var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);
                var result = client.InitiateOutboundCall("+17862200728", warmCall.AgentOnePhone, Url.ActionAbsolute("HandleAgentOneCall"));

                if (result.RestException != null)
                {
                    Console.WriteLine(result.RestException.Message);
                }
                //let the browser know that the customer has connected and we're calling the agent
            }
            else
            {
                response.Say("Who are you?  Go away!");
                response.Hangup();
            }


            return TwiML(response);
        }

        public async Task<ActionResult> HandleAgentOneCall(string CallSid, string To)
        {
            //look up the call ID and drop into the same conference
            var response = new TwilioResponse();

            //check the caller ID and try to find a call config that matches it
            IMobileServiceTable<WarmCall> warmCallTable = MobileService.GetTable<WarmCall>();
            var warmCalls = await warmCallTable.ReadAsync<WarmCall>(warmCallTable.Where(w => w.AgentOnePhone == To));

            var warmCall = warmCalls.FirstOrDefault();
            if (warmCall != null)
            {
                //update with the call sid
                warmCall.AgentOneCallSid = CallSid;
                await warmCallTable.UpdateAsync(warmCall);

                //put the agent into a conference
                response.Say("An adventure is requesting assistance.  Connecting you now");
                response.DialConference(warmCall.CustomerCallSid);
            }
            else
            {
                response.Say("Who are you?  Go away!");
                response.Hangup();
            }

            var context = GlobalHost.ConnectionManager.GetHubContext<Warm>();
            context.Clients.Group(warmCall.CustomerPhone).enableConnectAgentTwo();

            return TwiML(response);
        }

        public async Task<ActionResult> HandleAgentTwoCall(string CallSid, string To)
        {
            //look up the call ID and drop into the same conference
            var response = new TwilioResponse();

            //check the caller ID and try to find a call config that matches it
            IMobileServiceTable<WarmCall> warmCallTable = MobileService.GetTable<WarmCall>();
            var warmCalls = await warmCallTable.ReadAsync<WarmCall>(warmCallTable.Where(w => w.AgentTwoPhone == To));

            var warmCall = warmCalls.FirstOrDefault();
            if (warmCall != null)
            {
                //update with the call sid
                warmCall.AgentTwoCallSid = CallSid;
                await warmCallTable.UpdateAsync(warmCall);

                //put the agent into a conference
                response.Say("An adventure is requesting assistance.  Connecting you now");
                response.DialConference(warmCall.CustomerCallSid);
            }
            else
            {
                response.Say("Who are you?  Go away!");
                response.Hangup();
            }

            return TwiML(response);
        }

        public async Task<ActionResult> ConnectAgentTwo(string To)
        {
            //check the caller ID and try to find a call config that matches it
            IMobileServiceTable<WarmCall> warmCallTable = MobileService.GetTable<WarmCall>();
            var warmCalls = await warmCallTable.ReadAsync<WarmCall>(warmCallTable.Where(w => w.AgentTwoPhone == To));

            var warmCall = warmCalls.FirstOrDefault();
            if (warmCall != null)
            {
                var client = new TwilioRestClient(Credentials.AccountSid, Credentials.AuthToken);
                var result = client.InitiateOutboundCall("+17862200728", warmCall.AgentTwoPhone, Url.ActionAbsolute("HandleAgentTwoCall"));

                if (result.RestException != null)
                {
                    Console.WriteLine(result.RestException.Message);
                }
            }

            return new EmptyResult();
        }
    }
}

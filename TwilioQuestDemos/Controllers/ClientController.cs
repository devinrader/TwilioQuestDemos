using Microsoft.WindowsAzure.MobileServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using Twilio;
using Twilio.TwiML;
using Twilio.TwiML.Mvc;
using TwilioQuestDemos.Models;

namespace TwilioQuestDemos.Controllers
{
    public class ClientController : TwilioController
    {
        MobileServiceRequestHelper<PhoneNumber> helper = new MobileServiceRequestHelper<PhoneNumber>("phoneNumbers");

        public static MobileServiceClient MobileService = new MobileServiceClient("https://twoconferences.azure-mobile.net/", "aNVmMdxUUyFSVTsRslVIlRNvxAUZzY46");

        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Phone(string number)
        {
            IMobileServiceTable<PhoneNumber> phoneNumberTable = MobileService.GetTable<PhoneNumber>();
            var phoneNumbers = await phoneNumberTable.ReadAsync<PhoneNumber>(phoneNumberTable.Where(p => p.Value == number));

            PhoneNumber phoneNumber = phoneNumbers.FirstOrDefault();
            if (phoneNumber == null)
            {
                //save the number and generate a new id
                phoneNumber = new PhoneNumber();
                phoneNumber.Value = number;
                await phoneNumberTable.InsertAsync(phoneNumber);
            }

            var capability = new TwilioCapability(Credentials.AccountSid, Credentials.AuthToken);
            capability.AllowClientIncoming(phoneNumber.Key.ToString("N")); //phone number
            capability.AllowClientOutgoing("");
            var token = capability.GenerateToken();

            ViewBag.token = token;

            return View();
        }

        public async Task<ActionResult> RouteIncoming(string From)
        {
            var response = new TwilioResponse();

            //look up the from and if we recognize it dial the associated client
            IMobileServiceTable<PhoneNumber> phoneNumberTable = MobileService.GetTable<PhoneNumber>();
            var phoneNumbers = await phoneNumberTable.ReadAsync<PhoneNumber>(phoneNumberTable.Where(p => p.Value == From));

            PhoneNumber phoneNumber = phoneNumbers.FirstOrDefault();
            if (phoneNumber == null)
            {
                response.Say("Could not find your phone number.  Please register first");
            }
            else
            {
                response.Say("Connecting you now");
                response.DialClients(phoneNumber.Key.ToString());
            }
            return TwiML(response);

        }

        public ActionResult RouteOutgoing(string source, string target)
        {
            var response = new TwilioResponse();
            response.Dial(target, new { CallerId = source });

            return TwiML(response);
        }
    }
}

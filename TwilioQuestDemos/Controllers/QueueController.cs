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
    public class QueueController : TwilioController
    {
        public ActionResult BasicEnqueue()
        {
            var response = new TwilioResponse();
            response.Say("Welcome adventurer to the Twilio Quest Chapter 10 demo line.  An incantation adds you to a call queue.");
            response.Enqueue("twilioquestchapter10");
            
            return TwiML(response);
        }

        public ActionResult BasicDequeue()
        {
            var response = new TwilioResponse();
            response.Say("Now transporting into a phone call with a fellow adventurer.  Say hello when you get there.");
            response.DialQueue("twilioquestchapter10", new { timeout="5"});  //TODO: need to add a overload here

            response.Say("Hmm.  Looks like there are not any adventures waiting right now.  Try later.");
            return TwiML(response);
        }

        public ActionResult AdvancedEnqueue()
        {
            var response = new TwilioResponse();
            response.Say("You've been banished to a call queue.  Enjoy your stay.");
            response.Enqueue("twilioquestchapter11", new { waitUrl = Url.Action("AdvancedWait", "Queue", null, "http")});

            response.Say("Hail the adventurer!  He has escaped the despair of the dreaded call queue");
            response.Say("We wish you well on your continued journey");
            return TwiML(response);
        }

        public ActionResult AdvancedWait(string QueuePosition, string QueueTime, string AvgWaitTime, string CurrentQueueSize)
        {
            var response = new TwilioResponse();

            response.Say(string.Format("Bwahahaha!  Your time in the queue has been {0} seconds.  Enjoy your wait with {1} of your friends!", QueueTime, CurrentQueueSize));

            response.BeginGather(new { action = Url.Action("Queue", "AdvancedWaitGather") });
            response.Say("Enter the magic number now to be released from the queue", new { numDigits="3", timeout="15"});
            response.EndGather();

            response.Play("314");

            return TwiML(response);
        }

        public ActionResult AdvancedWaitGather(string Digits)
        {
            var response = new TwilioResponse();
            response.Say("The adventurer is attempting to escape!  Stop him!");

            if (Digits == "314")
            {
                response.Say("The powers of this one are strong!  Leave him.  We will meet again another day.");
                //response.Leave();  //TODO: apparently need to add this to the .net helper?
            }
            else
            {
                response.Say("You fool!  You thought you could escape the grip of the queue? Never! Back to the queue with you!");
            }

            return TwiML(response);
        }
    }
}

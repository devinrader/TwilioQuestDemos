using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Twilio.TwiML;
using Twilio.TwiML.Mvc;

namespace TwilioQuestDemos.Controllers
{
    public class MuteController : TwilioController
    {
       // Dictionary<string, bool> participants = new Dictionary<string, bool>();

        private Dictionary<string,bool> LoadParticipants()
        {
            //if the cache was empty, populate it
            if (System.Web.HttpContext.Current.Cache["participants"] == null)
            {
                System.Web.HttpContext.Current.Cache["participants"] = new Dictionary<string,bool>();
            }

            //get the participants form the cache
            var objects = System.Web.HttpContext.Current.Cache["participants"];

            //cast to the right object and return
            return (Dictionary<string,bool>)objects;
        }

        public ActionResult AddToConference(string From)
        {
            var participants = LoadParticipants();

            if (participants.ContainsKey(From))
            {
                participants[From] = false;
            }
            else
            {
                participants.Add(From, false);
            }

            System.Web.HttpContext.Current.Cache["participants"] = participants;

            var response = new TwilioResponse();
            response.Say("Welcome to a conference.  Press *6 to mute or unmute yourself.");
            response.Redirect(Url.Action("PlaceInConference", new { mute=false}));

            return TwiML(response);
        }

        public ActionResult PlaceInConference(bool mute)
        {
            Debug.WriteLine("Putting caller into conference: {0}", mute);

            var response = new TwilioResponse();
            response.DialConference("Chapter18Conference", new { muted = mute, beep = false, startConferenceOnEnter = true, endConferenceOnExit = false }, new { hangupOnStar = true });
            response.BeginGather(new { action = Url.ActionAbsolute("ProcessCommand"), numDigits="1" });
            response.EndGather();
            response.Say("Bye");
            
            return TwiML(response);
        }

        public ActionResult ProcessCommand(string From, string Digits)
        {
            var response = new TwilioResponse();

            var participants = LoadParticipants();

            if (Digits == "6")
            {
                participants[From] = !(bool)participants[From];
                response.Redirect(Url.Action("PlaceInConference", new { mute = participants[From] }));
                System.Web.HttpContext.Current.Cache["participants"] = participants;
            }

            return TwiML(response);
        }
    }
}

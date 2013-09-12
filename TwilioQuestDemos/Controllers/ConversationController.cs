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
    public class ConversationController : TwilioController
    {
        public ActionResult Reply(string Body, string From)
        {
            var response = new TwilioResponse();

            //get the session object via phone number
            Conversation c = Session[From] as Conversation;

            if (c==null) 
            {
                c = new Conversation();
                c.NextStep = "name";
                Session[From] = c;

                response.Sms("STOP! He who would cross the Bridge of Death must answer me these questions three ere the other side he see.  What...is your name?");
                return TwiML(response);
            }

            if (Body == "clearplayer")
            {
                Session[From] = null;
                Session.Abandon();

                response.Sms("You have been forgotten.");
                return TwiML(response);
            }

            switch(c.NextStep) 
            {
                case "name" :
                    c.NextStep = "color";
                    c.Name = Body;
                    Session[From] = c;

                    response.Sms(string.Format("Welcome {0}!  Now, what...is your favorite color?", Body));
                    break;
                case "color" :
                    c.NextStep = "swallow";
                    c.Color = Body;
                    Session[From] = c;

                    response.Sms(string.Format("Great answer {0}.  {1} is a wonderful color.  Lastly, what...is the airspeed velocity of an unladen swallow?", c.Name, Body));
                    break;
                case "swallow":

                    Session[From] = null;
                    Session.Abandon();

                    if (Body.ToLower().Contains("African or European"))
                    {
                        response.Sms(string.Format("Well...I don't know...AAAAARRRRRRRRRRRRRRRGGGGGHHHH!!!  Curse you {0}", c.Name));
                    }
                    else
                    {
                        response.Sms(string.Format("{0}?  Wrong!  The correct answer is 'African or European?'  Good try though {1}.  And I do still like the color {2}.", Body, c.Name, c.Color));
                    }
                    break;
            }

            return TwiML(response);
        }
    }

    public class Conversation
    {
        public string NextStep { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TwilioQuestDemos.Models
{
    public class WarmCall
    {
        public WarmCall()
        {
            CustomerCallSid = "";
            AgentOnePhone = "";
            AgentOneCallSid = "";
            AgentTwoPhone = "";
            AgentTwoCallSid = "";
        }

        public int Id { get; set; }

        public string CustomerPhone {get;set;}
        public string CustomerCallSid { get; set; }

        public string AgentOnePhone { get; set; }
        public string AgentOneCallSid { get; set; }

        public string AgentTwoPhone { get; set; }
        public string AgentTwoCallSid { get; set; }
    }
}
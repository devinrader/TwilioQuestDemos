using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TwilioQuestDemos.Hubs
{
    [HubName("warmHub")]
    public class Warm : Hub
    {
        public void AddConnectionToGroup(string customerPhone)
        {
            this.Groups.Add(this.Context.ConnectionId, customerPhone);
        }
    }
}
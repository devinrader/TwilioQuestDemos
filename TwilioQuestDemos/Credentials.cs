using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace TwilioQuestDemos
{
    public static class Credentials
    {
        public static string AccountSid = ConfigurationManager.AppSettings["AccountSid"].ToString();
        public static string AuthToken = ConfigurationManager.AppSettings["AuthToken"].ToString();
    }
}
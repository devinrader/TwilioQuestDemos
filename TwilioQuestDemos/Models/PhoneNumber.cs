using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TwilioQuestDemos.Models
{
    public class PhoneNumber
    {
        public PhoneNumber()
        {
            this.Key = new Guid();
        }

        public int Id { get; set; }
        public string Value { get; set; }
        public Guid Key { get; private set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

namespace ResourceManager.Models
{
        public class Task{
            public int ID { get; set; }
            public string title { get; set; }
            public string description { get; set; }
            public DateTime dueDate { get; set; }
            public int duration{ get; set; }
            public int employeeID { get; set; }
        }
}
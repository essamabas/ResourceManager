
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ResourceManager.Models
{
        public class Employee{
            public int ID { get; set; }
            public string firstName { get; set; }
            public string lastName { get; set; }
            public string gender { get; set; }
            public string address { get; set; }
            public string city { get; set; }
            public int orderTotal { get; set; }
            public List<Task> Tasks{ get; set;}
        }
}
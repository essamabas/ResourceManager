using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ResourceManager.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesDataController : Controller
    {
      Employee[] employees = new Employee[]{
         new Employee { ID = 1, firstName = "Mark", 
            lastName = "Mark",gender = "",address="", city="",orderTotal = 30 },
         new Employee { ID = 2, firstName = "Allan", 
            lastName = "Mark",gender = "",address="", city="",orderTotal = 30 },
         new Employee { ID = 3, firstName = "Johny", 
            lastName = "Mark",gender = "",address="", city="",orderTotal = 30 },
      };

        [HttpGet("[action]")]
        public IEnumerable<Employee> GetAllEmployees()
        {
            return employees;
        }

        [HttpGet("{id}", Name = "GetEmployee")]
        public IActionResult GetEmployee(int id){
            var employee = employees.FirstOrDefault((p) => p.ID == id);
            if (employee == null){
                return NotFound();
            }
            return Ok(employee);
        }

        public class Employee{
            public int ID { get; set; }
            public string firstName { get; set; }
            public string lastName { get; set; }
            public string gender { get; set; }
            public string address { get; set; }
            public string city { get; set; }
            public int orderTotal { get; set; }
        }
    }
}

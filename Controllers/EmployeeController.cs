using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ResourceManager.Models;

//https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api
namespace ResourceManager.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
      List<Employee> employees = new List<Employee>{
         new Employee { ID = 1, firstName = "Mark", 
            lastName = "Mark",gender = "male",address="", city="",orderTotal = 30 },
         new Employee { ID = 2, firstName = "Allan", 
            lastName = "Mark",gender = "male",address="", city="",orderTotal = 30 },
         new Employee { ID = 3, firstName = "Johny", 
            lastName = "Mark",gender = "female",address="", city="",orderTotal = 30 },
      };

        [HttpGet]
        public IEnumerable<Employee> GetAllItems()
        {
            return employees;
        }

        [HttpGet("{id}", Name = "GetItem")]
        public IActionResult GetItem(int id){
            var employee = employees.FirstOrDefault((p) => p.ID == id);
            if (employee == null){
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Employee item)
        {
            if (item == null || item.ID != id)
            {
                return BadRequest();
            }

            var index = employees.IndexOf(item);
            if (index != -1) {
                return NotFound();
            }
            // update Item
            employees[index] = item;
            //employees.Update(item);
            return Ok();
        }

        [HttpPost]
        public IActionResult Create([FromBody] Employee item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            employees.Add(item);
            //return CreatedAtRoute("GetTodo", new { id = item.ID }, item);
            return Ok();
        }

        //delete
        [HttpDelete("{id}", Name = "DeleteEmployee")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee = employees.Find((p) => p.ID == id);
            if (employee == null)
            {
                return NotFound();
            }
            employees.Remove(employee);
            return new NoContentResult();
        }
    }
}

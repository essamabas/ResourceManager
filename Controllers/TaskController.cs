using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using ResourceManager.Models;

//https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api
namespace ResourceManager.Controllers
{
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
      List<Task> tasks = new List<Task>{
         new Task { ID = 1, title = "task1", description = "Task1", employeeID = 1},
         new Task { ID = 2, title = "task2", description = "Task2", employeeID = 1},
         new Task { ID = 3, title = "task3", description = "Task3", employeeID = 2}         
      };

        [HttpGet]
        public IEnumerable<Task> GetAllItems()
        {
            return tasks;
        }

        [HttpGet("{employeeID}", Name = "GetFilterItem")]
        public IActionResult GetFilterItem(int employeeID){
            var task = tasks.Where(emp => emp.employeeID == employeeID).ToList();
            if (task == null){
                return NotFound();
            }
            return Ok(task);
        }               

        //delete
        [HttpDelete("{id}", Name = "DeleteTask")]
        public IActionResult DeleteTask(int id)
        {
            var task = tasks.Find((p) => p.ID == id);
            if (task == null)
            {
                return NotFound();
            }
            tasks.Remove(task);
            return new NoContentResult();
        }
    }
}

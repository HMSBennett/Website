using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Website.Models;
using Website.Service;

namespace Website.Controllers {
    public class DevLogController : Controller {

        public IActionResult Index() {

            ListViewModel vm = new ListViewModel();
            
            DevLogService devLogService = new DevLogService();

            List<string> link = devLogService.GetLink();
            List<string> content = devLogService.GetContent();
            List<string> date = devLogService.GetDate();

            DevLogViewModel model = new DevLogViewModel() {
                DevLink = link,
                DevContent = content,
                DevDate = date
            };
            
            return View(model);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Meal.Models.User;
namespace Meal.Controllers.User
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult VarifyUser(UserLogin user)
        {
            return View();
        }
    }
}
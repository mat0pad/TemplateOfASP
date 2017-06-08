using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;

namespace ASPNETMVCTemplate.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var mvcName = typeof(Controller).Assembly.GetName();
            var isMono = Type.GetType("Mono.Runtime") != null;

            ViewData["Version"] = mvcName.Version.Major + "." + mvcName.Version.Minor;
            ViewData["Runtime"] = isMono ? "Mono" : ".NET";

            // Check om async form client
            /*if (Request.IsAjaxRequest())
				return PartialView("Confirmation");
			*/

            return View();
        }

        // Eksempel på func der kaldes fra klient via AJAX dette eksempel på !POST!
        public string Login(string password, string email)
        {
            Console.WriteLine("Server received call!");
            Console.WriteLine("pass: " + password + ", mail: " + email);
            if (password == "test" && email == "test@test.com")
                return "{ \"object\" : \"Succes - " + password + ", " + email + "'\" }";
            else
                return "Failed login with credentials - " + password + ", " + email;
        }


        // Eksempel på func der kaldes fra klient via AJAX dette eksempel på !GEt!
        public string Navn(int nr)
        {
            var Stringarray = new string[] { "anton", "abe" };

            if (nr >= 0 && nr <= 1)
                return Stringarray[nr];
            else
                return "Error!!!!!";
        }
    }
}

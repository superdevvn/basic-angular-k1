using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;
using System.Net.Http;
using System.Net.Http.Headers;
using System;
using System.Web;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getUsers")]
        [AuthorizeFilter]
        public IHttpActionResult GetUsers()
        {
            var userService = new UserService();
            return Ok(userService.GetList());
        }

        [HttpGet]
        [Route("api/getUser/{id}")]
        public IHttpActionResult GetUser(int id)
        {
            var userService = new UserService();
            return Ok(userService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveUser")]
        public IHttpActionResult SaveUser([FromBody]User user)
        {
            var userService = new UserService();
            return Ok(userService.PersistUser(user));
        }

        //[HttpPost]
        //[Route("api/login")]
        //[AuthorizeFilter]
        //public IHttpActionResult Login([FromBody]User user)
        //{
        //    var userService = new UserService();
        //    var currentUser = userService.Login(user.Username, user.Password);
        //    Request.Properties["Authorization"] = userService.Encrypt(currentUser);
        //    //var cookie = new HttpCookie("token-superdev");
        //    //cookie.Value = userService.Encrypt(currentUser);
        //    //cookie.Expires = DateTime.Now.AddDays(1);
        //    //HttpContext.Current.Response.Cookies.Add(cookie);
        //    return Ok(currentUser);
        //}

        [HttpPost]
        [Route("api/login")]
        [AuthorizeFilter]
        public HttpResponseMessage Login([FromBody]User user)
        {
            var resp = new HttpResponseMessage();
            var userService = new UserService();
            var currentUser = userService.Login(user.Username, user.Password);
            var cookie = new CookieHeaderValue("session-id", userService.Encrypt(currentUser));
            cookie.Expires = DateTimeOffset.Now.AddDays(1);

            resp.Headers.AddCookies(new CookieHeaderValue[] { cookie });
            return resp;
        }
    }
}

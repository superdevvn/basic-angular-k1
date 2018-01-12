using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace SuperDev.APIs
{
    class AuthorizeFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            //var a = actionContext.Request.Headers
            //var b = a;
        }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            //if(actionExecutedContext.Request.Properties["Authorization"] != null)
            //{
            //    actionExecutedContext.Response.Content.Headers.Add("auth-superdev", actionExecutedContext.Request.Properties["Authorization"].ToString());
            //}
        }
    }
}

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

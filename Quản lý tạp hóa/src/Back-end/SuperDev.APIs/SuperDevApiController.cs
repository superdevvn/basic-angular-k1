using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Threading;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        //public override Task<HttpResponseMessage> ExecuteAsync(HttpControllerContext controllerContext, CancellationToken cancellationToken)
        //{
        //    return base
        //        .ExecuteAsync(controllerContext, cancellationToken)
        //        .ContinueWith(t =>
        //        {
        //    // the controller action has finished executing, 
        //    // your custom code could come here ...

        //    return t.Result;
        //        });
        //}
    }
}

using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Threading;

namespace SuperDev.APIs
{
    [AuthorizeFilter]
    public partial class SuperDevApiController : ApiController
    {
    }
}

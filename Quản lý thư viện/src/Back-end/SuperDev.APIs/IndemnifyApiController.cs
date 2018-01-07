using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getIndemnify/{id}")]
        public IHttpActionResult GetIndemnify(int id)
        {
            var indemnifyService = new IndemnifyService();
            return Ok(indemnifyService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveIndemnify")]
        public IHttpActionResult SaveIndemnify([FromBody]Indemnify indemnify)
        {
            var indemnifyService = new IndemnifyService();
            return Ok(indemnifyService.PersistIndemnify(indemnify));
        }        

        [HttpPost]
        [Route("api/getIndemnifies")]
        public IHttpActionResult GetIndemnifies()
        {
            var indemnifyService = new IndemnifyService();
            return Ok(indemnifyService.GetList());
        }
    }
}

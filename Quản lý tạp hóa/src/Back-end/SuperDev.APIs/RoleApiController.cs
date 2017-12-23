using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public class RoleApiController:ApiController
    {
        [HttpPost]
        [Route("api/createRole")]
        public IHttpActionResult PersistUser([FromBody]Role role)
        {
            var roleService = new RoleService();
            return Ok(roleService.PersistRole(role));
        }
    }
}

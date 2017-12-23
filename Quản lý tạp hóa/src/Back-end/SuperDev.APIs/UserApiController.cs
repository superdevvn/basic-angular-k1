using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using SuperDev.Models;

namespace SuperDev.APIs
{
    public class UserApiController:ApiController
    {
        [HttpPost]
        [Route("api/persistUser")]
        public IHttpActionResult PersistUser([FromBody]User user)
        {
            return Ok(user);
        }
    }
}

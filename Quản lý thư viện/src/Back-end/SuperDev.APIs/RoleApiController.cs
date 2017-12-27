﻿using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public class RoleApiController : ApiController
    {
        [HttpGet]
        [Route("api/getRole")]
        public IHttpActionResult GetRole(int id)
        {
            var roleService = new RoleService();
            return Ok(roleService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveRole")]
        public IHttpActionResult SaveRole([FromBody]Role role)
        {
            var roleService = new RoleService();
            return Ok(roleService.PersistRole(role));
        }        

        [HttpPost]
        [Route("api/getRoles")]
        public IHttpActionResult GetRoles()
        {
            var roleService = new RoleService();
            return Ok(roleService.GetList());
        }
    }
}

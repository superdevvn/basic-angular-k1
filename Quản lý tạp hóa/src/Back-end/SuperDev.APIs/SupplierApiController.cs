using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getSupplier/{id}")]
        public IHttpActionResult GetSupplier(int id)
        {
            var supplierService = new SupplierService();
            return Ok(supplierService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveSupplier")]
        public IHttpActionResult SaveSupplier([FromBody]Supplier supplier)
        {
            var supplierService = new SupplierService();
            return Ok(supplierService.PersistSupplier(supplier));
        }

        [HttpPost]
        [Route("api/getSuppliers")]
        public IHttpActionResult GetSuppliers()
        {
            var supplierService = new SupplierService();
            return Ok(supplierService.GetList());
        }
    }
}

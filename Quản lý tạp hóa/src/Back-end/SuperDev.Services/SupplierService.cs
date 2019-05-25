using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class SupplierService
    {
        public Supplier PersistSupplier(Supplier supplier)
        {
            var supplierRepository = new SupplierRepository();
            if (supplier.Id > 0) return supplierRepository.Update(supplier);
            return supplierRepository.Create(supplier);
        }

        public Supplier GetById(int id)
        {
            var supplierRepository = new SupplierRepository();
            return supplierRepository.GetEntity(id);
        }

        public IEnumerable<Supplier> GetList()
        {
            var supplierRepository = new SupplierRepository();
            return supplierRepository.GetEntities();
        }
    }
}

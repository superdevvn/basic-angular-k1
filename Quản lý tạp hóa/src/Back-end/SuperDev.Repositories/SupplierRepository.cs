using System.Collections.Generic;
using System.Linq;
using SuperDev.Models;

namespace SuperDev.Repositories
{
    public class SupplierRepository
    { 
        public Supplier Create(Supplier supplier)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Suppliers.Add(supplier);
                context.SaveChanges();
                context.Entry(supplier).Reload();
                return supplier;
            }
        }

        public Supplier Update(Supplier supplier)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Suppliers.Find(supplier.Id);
                context.CloneObject(entity, supplier);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public Supplier GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Suppliers.Find(id);
            }
        }

        public IEnumerable<Supplier> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Suppliers.ToList();
            }
        }
    }
}

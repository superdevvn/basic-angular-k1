using System.Collections.Generic;
using System.Linq;
using SuperDev.Models;

namespace SuperDev.Repositories
{
    public class ProductRepository
    {
        public Product Create(Product product)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Products.Add(product);
                context.SaveChanges();
                context.Entry(product).Reload();
                return product;
            }
        }

        public Product Update(Product product)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Products.Find(product.Id);
                context.CloneObject(entity, product);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Product> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Products.ToList();
            }
        }

        public Product GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Products.Find(id);
            }
        }
    }
}

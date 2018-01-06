using System.Collections.Generic;
using System.Linq;
using SuperDev.Models;

namespace SuperDev.Repositories
{
    public class InOutRepository
    {
        public InOut Create(InOut inOut)
        {
            using (var context = new SuperDevDbContext())
            {
                context.InOuts.Add(inOut);
                context.SaveChanges();
                context.Entry(inOut).Reload();
                return inOut;
            }
        }

        public InOut Update(InOut inOut)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.InOuts.Find(inOut.Id);
                context.CloneObject(entity, inOut);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<InOutComplex> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Select(entity => new InOutComplex
                {
                    Id = entity.Id,
                    ProductId = entity.ProductId,
                    ProductName = entity.Product.Name,
                    UserId = entity.UserId,
                    Username = entity.User.Username,
                    Date = entity.Date,
                    Quantity = entity.Quantity,
                    Price = entity.Price,
                    Type = entity.Type
                }).ToList();
            }
        }

        public InOut GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Find(id);
            }
        }
    }
}

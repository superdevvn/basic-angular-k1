using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

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

        public IEnumerable<InOutComplex> GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Select(entity=> new InOutComplex{
                    Id = entity.Id,
                    BookId = entity.BookId,
                    BookName = entity.Book.Name,
                    CustomerId = entity.CustomerId,
                    CustomerName = entity.Customer.FirstName + " " + entity.Customer.LastName,
                    UserId = entity.UserId,
                    Username = entity.User.Username,
                    FromDate = entity.FromDate,
                    ToDate = entity.ToDate
                }).ToList();
            }
        }

        public InOut GetById(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.InOuts.Find(id);
            }
        }
    }
}

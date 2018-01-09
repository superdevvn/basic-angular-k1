using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class IndemnifyRepository
    {
        public Indemnify Create(Indemnify indemnify)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Indemnifies.Add(indemnify);
                context.SaveChanges();
                context.Entry(indemnify).Reload();
                return indemnify;
            }
        }

        public Indemnify Update(Indemnify indemnify)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Indemnifies.Find(indemnify.Id);
                context.CloneObject(entity, indemnify);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Indemnify> GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Indemnifies.ToList();
            }
        }

        public Indemnify GetById(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Indemnifies.Find(id);
            }
        }
    }
}

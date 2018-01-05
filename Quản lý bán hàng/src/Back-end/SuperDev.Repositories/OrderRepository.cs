using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class OrderRepository
    {
        public Order Create(Order order)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Orders.Add(order);
                context.SaveChanges();
                context.Entry(order).Reload();
                return order;
            }
        }

        public Order Update(Order order)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Orders.Find(order.Id);
                context.CloneObject(entity, order);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Order> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Orders.ToList();
            }
        }

        public Order GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Orders.Find(id);
            }
        }
    }
}

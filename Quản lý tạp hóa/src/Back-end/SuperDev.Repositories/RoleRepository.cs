using System.Collections.Generic;
using System.Linq;
using SuperDev.Models;

namespace SuperDev.Repositories
{
    public class RoleRepository
    {
        public Role Create(Role role)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Roles.Add(role);
                context.SaveChanges();
                context.Entry(role).Reload();
                return role;
            }
        }

        public Role Update(Role role)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Roles.Find(role.Id);
                context.CloneObject(entity, role);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<Role> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Roles.ToList();
            }
        }

        public Role GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Roles.Find(id);
            }
        }

        public void DeleteEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Roles.Remove(context.Roles.Find(id));
                context.SaveChanges();
            }
        }
    }
}

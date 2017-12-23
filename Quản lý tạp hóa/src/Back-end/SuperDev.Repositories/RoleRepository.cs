using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    }
}

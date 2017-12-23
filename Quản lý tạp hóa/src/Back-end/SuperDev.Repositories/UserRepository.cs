using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SuperDev.Models;

namespace SuperDev.Repositories
{
    public class UserRepository
    { 
        public User Create(User user)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Users.Add(user);
                context.SaveChanges();
                context.Entry(user).Reload();
                return user;
            }
        }

        public User Update(User user)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Users.Find(user.Id);
                context.CloneObject(entity, user);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }
    }
}

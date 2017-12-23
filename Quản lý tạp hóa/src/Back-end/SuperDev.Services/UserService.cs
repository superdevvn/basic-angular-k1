using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class UserService
    {
        public User PersistUser(User user)
        {
            var userRepository = new UserRepository();
            if (user.Id > 0) return userRepository.Update(user);
            return userRepository.Create(user);
        }
    }
}

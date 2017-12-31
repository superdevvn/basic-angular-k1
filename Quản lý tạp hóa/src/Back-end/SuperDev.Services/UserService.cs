using System.Collections.Generic;
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

        public IEnumerable<UserComplex> GetList()
        {
            var userRepository = new UserRepository();
            return userRepository.GetEntities();
        }

        public User GetById(int id)
        {
            var userRepository = new UserRepository();
            return userRepository.GetEntity(id);
        }
    }
}

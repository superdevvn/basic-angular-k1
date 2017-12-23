using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class RoleService
    {
        public Role PersistRole(Role role)
        {
            var roleRepository = new RoleRepository();
            if (role.Id > 0) return roleRepository.Update(role);
            return roleRepository.Create(role);
        }
    }
}

using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class IndemnifyService
    {
        public Indemnify PersistIndemnify(Indemnify indemnify)
        {
            var indemnifyRepository = new IndemnifyRepository();
            var userService = new UserService();
            if (indemnify.Id > 0)
            {
                var entity = indemnifyRepository.GetById(indemnify.Id);
                indemnify.UserId = entity.UserId;
                return indemnifyRepository.Update(indemnify);
            }
            else
            {
                indemnify.UserId = userService.GetCurrentUser().Id;
                return indemnifyRepository.Create(indemnify);
            }
        }

        public IEnumerable<IndemnifyComplex> GetList()
        {
            var indemnifyRepository = new IndemnifyRepository();
            return indemnifyRepository.GetList();
        }

        public Indemnify GetById(int id)
        {
            var indemnifyRepository = new IndemnifyRepository();
            return indemnifyRepository.GetById(id);
        }
    }
}

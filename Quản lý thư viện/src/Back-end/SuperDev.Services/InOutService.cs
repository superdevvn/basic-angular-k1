using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class InOutService
    {
        public InOut PersistInOut(InOut inOut)
        {
            var inOutRepository = new InOutRepository();
            var userService = new UserService();
            if (inOut.Id > 0)
            {
                var entity = inOutRepository.GetById(inOut.Id);
                inOut.UserId = entity.Id;
                return inOutRepository.Update(inOut);
            }
            else
            {
                inOut.UserId = userService.GetCurrentUser().Id;
                return inOutRepository.Create(inOut);
            }
        }

        public IEnumerable<InOut> GetList()
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetList();
        }

        public InOut GetById(int id)
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetById(id);
        }
    }
}

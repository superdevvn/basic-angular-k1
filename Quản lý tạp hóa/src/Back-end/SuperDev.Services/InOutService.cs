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
                var entity = inOutRepository.GetEntity(inOut.Id);
                inOut.UserId = entity.UserId;
                return inOutRepository.Update(inOut);
            }
            inOut.UserId = userService.GetCurrentUser().Id;
            return inOutRepository.Create(inOut);
        }

        public IEnumerable<InOutComplex> GetList()
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetEntities();
        }

        public InOut GetById(int id)
        {
            var inOutRepository = new InOutRepository();
            return inOutRepository.GetEntity(id);
        }
    }
}

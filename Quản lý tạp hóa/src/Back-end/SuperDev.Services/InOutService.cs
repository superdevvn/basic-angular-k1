﻿using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class InOutService
    {
        public InOut PersistInOut(InOut inOut)
        {
            var inOutRepository = new InOutRepository();
            if (inOut.Id > 0) return inOutRepository.Update(inOut);
            else
            {
                var userService = new UserService();
                inOut.UserId = userService.GetCurrentUser().Id;
                return inOutRepository.Create(inOut);
            }
        }

        public IEnumerable<InOut> GetList()
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

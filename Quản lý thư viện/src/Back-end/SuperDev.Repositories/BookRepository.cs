using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class BookRepository
    {
        public Book Create(Book book)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Books.Add(book);
                context.SaveChanges();
                context.Entry(book).Reload();
                return book;
            }
        }

        public Book Update(Book book)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Books.Find(book.Id);
                context.CloneObject(entity, book);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<BookComplex> GetList()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Books.Select(entity=>new BookComplex {
                    Id = entity.Id,
                    CategoryId = entity.CategoryId,
                    CategoryName = entity.Category.Name,
                    Code = entity.Code,
                    Name = entity.Name,
                    Description = entity.Description,
                    IsActived = entity.IsActived
                }).ToList();
            }
        }

        public Book GetById(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Books.Find(id);
            }
        }
    }
}

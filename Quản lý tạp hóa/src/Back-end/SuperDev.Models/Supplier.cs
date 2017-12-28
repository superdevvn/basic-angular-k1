using System.Collections.Generic;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Supplier> Suppliers { get; set; }
    }

    public class Supplier
    {

        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Description { get; set; }

        public virtual List<Product> Products { get; set; }
    }
}

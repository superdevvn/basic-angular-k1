using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext : DbContext
    {
        public SuperDevDbContext()
            : base("Default")
        {
            Configuration.LazyLoadingEnabled = false;
            Database.SetInitializer<SuperDevDbContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
        }

        public int SaveChanges(int? id = null)
        {
            return base.SaveChanges();
        }
    }
}
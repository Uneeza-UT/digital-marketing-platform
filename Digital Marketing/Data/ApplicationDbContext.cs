using Microsoft.EntityFrameworkCore; 
using Digital_Marketing.Models;

namespace Digital_Marketing.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BookConsultation>()
                        .HasMany(b => b.Services)
                        .WithMany(s => s.BookConsultations)
                        .UsingEntity(j => j.ToTable("BookConsultationServices"));

            modelBuilder.Entity<Service>()
                .HasIndex(s => s.Name)
                .IsUnique();
        }


        public DbSet<BookConsultation> BookConsultations { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ForgotPassword> ForgotPasswords { get; set; }
    }
}

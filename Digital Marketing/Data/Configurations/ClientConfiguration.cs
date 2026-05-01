using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Digital_Marketing.Data.Configurations
{
    public class ClientConfiguration : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.HasKey(bc => bc.Id);
            builder.Property(bc => bc.Name).IsRequired().HasMaxLength(100);
            builder.Property(bc => bc.Email).IsRequired().HasMaxLength(100);
            builder.Property(bc => bc.BrandName).IsRequired(false).HasMaxLength(100);
            builder.Property(bc => bc.PhoneNumber).IsRequired(false).HasMaxLength(20);
            builder.Property(bc => bc.Industry).IsRequired().HasMaxLength(50);
            builder.Property(bc => bc.Budget).IsRequired().HasMaxLength(50);
            builder.Property(bc => bc.Message).IsRequired(false).HasMaxLength(1000);
            builder.Property(bc => bc.Status).IsRequired().HasMaxLength(20).HasDefaultValue("Active");
            builder.Property(bc => bc.CreatedAt).IsRequired().HasDefaultValueSql("GETUTCDATE()");
            builder.Property(bc => bc.IsConverted).IsRequired().HasDefaultValue(false);
            builder.Property(bc => bc.LastContactedAt).IsRequired(false);
            builder.Property(bc => bc.UpdatedAt).IsRequired(false);

            builder.HasMany(c => c.Services)
                   .WithMany(s => s.Clients)
                   .UsingEntity(j => j.ToTable("ClientServices"));

        }
    }
}

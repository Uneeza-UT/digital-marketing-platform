using Microsoft.EntityFrameworkCore;
using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Digital_Marketing.Data.Configurations
{
    public class BookConsultationConfiguration : IEntityTypeConfiguration<BookConsultation>
    {
        public void Configure(EntityTypeBuilder<BookConsultation> builder)
        {
            builder.HasKey(bc => bc.Id);
            builder.Property(bc => bc.Name).IsRequired().HasMaxLength(100);
            builder.Property(bc => bc.Email).IsRequired().HasMaxLength(100);
            builder.Property(bc => bc.BrandName).IsRequired(false).HasMaxLength(100);
            builder.Property(bc => bc.PhoneNumber).IsRequired(false).HasMaxLength(20);
            builder.Property(bc => bc.Industry).IsRequired().HasMaxLength(50);
            builder.Property(bc => bc.Budget).IsRequired().HasMaxLength(50);
            builder.Property(bc => bc.Message).IsRequired(false).HasMaxLength(1000);
            builder.Property(bc => bc.Status).IsRequired().HasMaxLength(20).HasDefaultValue("New");
            builder.Property(bc => bc.CreatedAt).IsRequired().HasDefaultValueSql("GETUTCDATE()");
            builder.Property(bc => bc.UpdatedAt).IsRequired(false);
            builder.Property(bc => bc.IsConvertedToClient).IsRequired().HasDefaultValue(false);

            builder.HasMany(c => c.Notes)
                   .WithOne(n => n.BookConsultation)
                   .HasForeignKey(n => n.BookConsultationId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}

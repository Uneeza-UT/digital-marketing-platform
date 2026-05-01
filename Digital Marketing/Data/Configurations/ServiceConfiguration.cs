using Microsoft.EntityFrameworkCore;
using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Digital_Marketing.Data.Configurations
{
    public class ServiceConfiguration: IEntityTypeConfiguration<Service>
    {
        public void Configure(EntityTypeBuilder<Service> builder)
        {
            builder.HasKey(s => s.Id);
            builder.Property(s => s.Name).IsRequired().HasMaxLength(500);
            builder.Property(s => s.IsActive).IsRequired().HasDefaultValue(true);
            builder.Property(s => s.CreatedAt).IsRequired().HasDefaultValueSql("GETUTCDATE()");
            builder.Property(s => s.UpdatedAt).IsRequired(false);
        }
    }
}

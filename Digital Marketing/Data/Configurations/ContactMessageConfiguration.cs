using Microsoft.EntityFrameworkCore;
using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Digital_Marketing.Data.Configurations
{
    public class ContactMessageConfiguration: IEntityTypeConfiguration<ContactMessage>
    {
        public void Configure(EntityTypeBuilder<ContactMessage> builder)
        {
            builder.HasKey(cm => cm.Id);
            builder.Property(cm => cm.Name).IsRequired().HasMaxLength(100);
            builder.Property(cm => cm.Email).IsRequired().HasMaxLength(100);
            builder.Property(cm => cm.Message).IsRequired().HasMaxLength(1000);
            builder.Property(cm => cm.CreatedAt).IsRequired().HasDefaultValueSql("GETUTCDATE()"); ;
        }
    }
}

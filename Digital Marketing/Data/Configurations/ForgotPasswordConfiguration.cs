using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Data.Configurations
{
    public class ForgotPasswordConfiguration : IEntityTypeConfiguration<ForgotPassword>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ForgotPassword> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.TokenHash).IsRequired();
            builder.Property(t => t.IsUsed).IsRequired().HasDefaultValue(false);
            builder.Property(t => t.ExpiryTime).IsRequired();
            builder.Property(t => t.CreatedAt).IsRequired().HasDefaultValueSql("GETUTCDATE()");
        }
    }
}

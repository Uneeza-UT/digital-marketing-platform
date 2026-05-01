using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Digital_Marketing.Data.Configurations
{
    public class NoteConfiguration: IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            builder.HasKey(n => n.Id);
            builder.Property(n => n.Content).IsRequired().HasMaxLength(1000);
            builder.Property(n => n.FollowupDate).IsRequired(false);
            builder.Property(n => n.CreatedAt).IsRequired().HasDefaultValueSql("GETUTCDATE()");
            builder.Property(n => n.UpdatedAt).IsRequired(false);
            builder.Property(n => n.BookConsultationId).IsRequired();
            builder.Property(n => n.UserId).IsRequired();

            builder.HasOne(n => n.BookConsultation)
                   .WithMany(c => c.Notes)
                   .HasForeignKey(n => n.BookConsultationId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(n => n.User)
                   .WithMany(u => u.Notes)
                   .HasForeignKey(n => n.UserId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}

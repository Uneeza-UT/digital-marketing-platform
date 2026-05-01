using Digital_Marketing.Models;

namespace Digital_Marketing.DTOs.Note
{
    public class NoteCreateDto
    {
        public required string Content { get; set; }
        public DateTime? FollowupDate { get; set; }
        public int BookConsultationId { get; set; }
        public int UserId { get; set; }
    }
}

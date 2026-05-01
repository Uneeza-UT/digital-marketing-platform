using Digital_Marketing.DTOs.User;

namespace Digital_Marketing.DTOs.Note
{
    public class NoteResponseDto
    {
        public int Id { get; set; }
        public required string Content { get; set; }
        public DateTime? FollowupDate { get; set; }
        public DateTime CreatedAt { get; set; }
        public int BookConsultationId { get; set; } 
        public UserNoteResponseDto User { get; set; }
    }
}

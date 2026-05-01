namespace Digital_Marketing.DTOs.Note
{
    public class NoteUpdateDto
    {
        public int Id { get; set; }
        public required string Content { get; set; }
        public DateTime? FollowupDate { get; set; }
        public int BookConsultationId { get; set; }
        public int UserId { get; set; }
    }
}

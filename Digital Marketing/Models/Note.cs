namespace Digital_Marketing.Models
{
    public class Note
    {
        public int Id { get; set; }
        public required string Content { get; set; }
        public DateTime? FollowupDate { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int BookConsultationId { get; set; }
        public BookConsultation BookConsultation { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}

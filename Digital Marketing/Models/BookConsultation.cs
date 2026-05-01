namespace Digital_Marketing.Models
{
    public class BookConsultation
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? BrandName { get; set; }
        public string? PhoneNumber { get; set; }
        public required string Industry { get; set; }
        public required string Budget { get; set; }
        public string? Message { get; set; }
        public required string Status { get; set; }
        public bool IsConvertedToClient { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public ICollection<Service> Services { get; set; } = new List<Service>();
        public ICollection<Note> Notes { get; set; } = new List<Note>();
    }
}

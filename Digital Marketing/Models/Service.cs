namespace Digital_Marketing.Models
{
    public class Service
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public ICollection<BookConsultation> BookConsultations { get; set; } = new List<BookConsultation>();
        public ICollection<Client> Clients { get; set; } = new List<Client>();
    }
}

namespace Digital_Marketing.DTOs.Service
{
    public class ServiceUpdateDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public bool IsActive { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

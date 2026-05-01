using Digital_Marketing.DTOs.Service;

namespace Digital_Marketing.DTOs.Client
{
    public class ClientUpdateDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? BrandName { get; set; }
        public string? PhoneNumber { get; set; }
        public required string Industry { get; set; }
        public required string Budget { get; set; }
        public string? Message { get; set; }
        public List<int> ServiceIds { get; set; } = new List<int>();
    }
}

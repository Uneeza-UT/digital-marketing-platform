namespace Digital_Marketing.DTOs.Service
{
    public class ServiceResponseDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public bool IsActive { get; set; }
    }
}

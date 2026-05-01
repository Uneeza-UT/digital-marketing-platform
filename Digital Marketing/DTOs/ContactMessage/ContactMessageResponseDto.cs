namespace Digital_Marketing.DTOs.ContactMessage
{
    public class ContactMessageResponseDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Message { get; set; }
    }
}

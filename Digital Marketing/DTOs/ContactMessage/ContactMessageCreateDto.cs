namespace Digital_Marketing.DTOs.ContactMessage
{
    public class ContactMessageCreateDto
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Message { get; set; }
    }
}

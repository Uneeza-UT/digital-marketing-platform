using Digital_Marketing.DTOs.Service;
using Digital_Marketing.DTOs.Note;

namespace Digital_Marketing.DTOs.BookConsultation
{
    public class BookConsultationResponseDto
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
        public List<ServiceResponseDto> Services { get; set; }
        public List<NoteResponseDto> Notes { get; set; }
    }
}

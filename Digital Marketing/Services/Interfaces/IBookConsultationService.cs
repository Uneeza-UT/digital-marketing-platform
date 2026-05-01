using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Service;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IBookConsultationService
    {
        Task CreateBookConsultationAsync(BookConsultationCreateDto dto);
        Task<List<BookConsultationResponseDto>> GetAllBookConsultationsAsync();
        Task<BookConsultationResponseDto?> GetBookConsultationByIdAsync(int id);
        Task<bool> UpdateAsync(BookConsultationUpdateDto dto);
        Task<bool> DeleteConsultationAsync(int id);
    }
}

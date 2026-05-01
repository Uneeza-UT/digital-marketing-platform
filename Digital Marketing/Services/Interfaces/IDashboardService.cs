using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Dashboard;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IDashboardService
    {
        Task<DashboardStatsDto> GetStatsAsync();
        Task<List<BookConsultationResponseDto>> GetConsultationsAsync();
    }
}

using Digital_Marketing.Models;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IDashboardRepository
    {
        Task<int> GetTotalConsultations();
        Task<int> GetNewClients();
        Task<int> GetActiveServices();
        Task<int> GetEmployeeCount();
        Task<List<BookConsultation>> GetRecentConsultationsAsync();
    }
}

using Digital_Marketing.Models;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IBookConsultationRepository
    {
        Task Add(BookConsultation bookConsultation);
        Task<List<Service>> GetServicesByIdsAsync(List<int> serviceIds);
        Task<List<BookConsultation>> GetAllWithServicesAsync();
        Task<BookConsultation?> GetByIdAsync(int id);
        Task<bool> UpdateAsync(BookConsultation consultation);
        Task SaveChangesAsync();
        Task<bool> DeleteAsync(BookConsultation consultation);
        Task<BookConsultation?> GetByEmailAsync(string email);
    }
}

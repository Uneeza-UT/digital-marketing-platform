using Digital_Marketing.Models;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IClientRepository
    {
        Task Add(Client client);
        Task<List<Service>> GetServicesByIdsAsync(List<int> serviceIds);
        Task<List<Client>> GetAllWithServicesAsync();
        Task<Client?> GetByIdAsync(int id);
        Task<Client?> GetByIdWitoutServicesAsync(int id);
        Task<bool> DeleteAsync(Client client);
        Task<bool> UpdateAsync(Client client);
        Task<bool> ExistsByEmailAsync(string email, int? idToExclude = null);
        Task SaveChangesAsync();
    }
}

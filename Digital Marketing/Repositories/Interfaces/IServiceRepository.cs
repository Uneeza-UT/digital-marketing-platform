using Digital_Marketing.Models;
using System.Linq.Expressions;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IServiceRepository
    {
        Task<List<Service>> GetAllServicesAsync();
        Task Add(Service service);
        Task<bool> UpdateAsync(Service service);
        Task<Service?> GetByIdAsync(int id);
        Task<bool> DeleteAsync(Service service);
        Task<bool> ExistsByNameAsync(string name, int? idToExclude = null);
    }
}

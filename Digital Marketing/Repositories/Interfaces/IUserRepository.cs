using Digital_Marketing.Models;
using System.Linq.Expressions;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUsersAsync();
        Task Add(User user);
        Task<User?> GetByIdAsync(int id);
        Task<bool> ExistsByEmailAsync(string email, int? idToExclude = null);
        Task<bool> UpdateAsync(User user);
        Task<bool> DeleteAsync(User user);
        Task SaveChangesAsync();
        Task<User?> GetByEmailAsync(string email);
    }
}

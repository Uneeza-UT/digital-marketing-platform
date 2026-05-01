using Digital_Marketing.Data;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task Add(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await _context.Users
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<bool> ExistsByEmailAsync(string email, int? idToExclude = null)
        {
            return await _context.Users
                .AnyAsync(s => s.Email == email && (!idToExclude.HasValue || s.Id != idToExclude.Value));
        }

        public async Task<bool> UpdateAsync(User user)
        {
            _context.Users.Update(user); 
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email);
        }

    }
}

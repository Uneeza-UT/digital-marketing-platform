using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Data;
using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Repositories
{
    public class ForgotPasswordRepository : IForgotPasswordRepository
    {
        private readonly ApplicationDbContext _context;
        public ForgotPasswordRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task CreateAsync(ForgotPassword token)
        {
            _context.ForgotPasswords.Add(token);
            await _context.SaveChangesAsync();
        }
        public async Task<ForgotPassword?> GetValidTokenAsync(string tokenHash)
        {
            return await _context.ForgotPasswords
                .FirstOrDefaultAsync(t => t.TokenHash == tokenHash && !t.IsUsed && t.ExpiryTime > DateTime.UtcNow);
        }
        public async Task<bool> UpdateAsync(ForgotPassword token)
        {
            _context.ForgotPasswords.Update(token);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}

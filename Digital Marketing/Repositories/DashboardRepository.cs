using Digital_Marketing.Data;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Repositories
{
    public class DashboardRepository : IDashboardRepository
    {
        private readonly ApplicationDbContext _context;

        public DashboardRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> GetTotalConsultations()
        {
            return await _context.BookConsultations.CountAsync();
        }

        public async Task<int> GetNewClients()
        {
            return await _context.Clients.Where(c => c.CreatedAt >= DateTime.UtcNow.AddDays(-7)).CountAsync();
        }

        public async Task<int> GetActiveServices()
        {
            return await _context.Services.Where(s => s.IsActive).CountAsync();
        }

        public async Task<int> GetEmployeeCount()
        {
            return await _context.Users.CountAsync();
        }

        public async Task<List<BookConsultation>> GetRecentConsultationsAsync()
        {
            return await _context.BookConsultations
               .Where(c => c.CreatedAt >= DateTime.UtcNow.AddDays(-7))
               .Include(b => b.Services)
               .OrderByDescending(bc => bc.CreatedAt)
               .ToListAsync();
        }
    }
}

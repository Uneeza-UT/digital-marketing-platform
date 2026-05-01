using Digital_Marketing.Data;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly ApplicationDbContext _context;

        public ClientRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Add(Client client)
        {
            await _context.Clients.AddAsync(client);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Service>> GetServicesByIdsAsync(List<int> serviceIds)
        {
            return await _context.Services
                .Where(s => serviceIds.Contains(s.Id))
                .ToListAsync();
        }

        public async Task<List<Client>> GetAllWithServicesAsync()
        {
            return await _context.Clients
                .Include(b => b.Services)
                .ToListAsync();
        }

        public async Task<Client?> GetByIdAsync(int id)
        {
            return await _context.Clients
                .Include(b => b.Services)
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<Client?> GetByIdWitoutServicesAsync(int id)
        {
            return await _context.Clients
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<bool> ExistsByEmailAsync(string email, int? idToExclude = null)
        {
            return await _context.Clients
                .AnyAsync(s => s.Email == email && (!idToExclude.HasValue || s.Id != idToExclude.Value));
        }

        public async Task<bool> UpdateAsync(Client client)
        {
            _context.Clients.Update(client);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteAsync(Client client)
        {
            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}

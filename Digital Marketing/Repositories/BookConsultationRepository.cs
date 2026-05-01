using Digital_Marketing.Data;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Models;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Repositories
{
    public class BookConsultationRepository : IBookConsultationRepository
    {
        private readonly ApplicationDbContext _context;
        public BookConsultationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Add(BookConsultation bookConsultation)
        {
            await _context.BookConsultations.AddAsync(bookConsultation);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Service>> GetServicesByIdsAsync(List<int> serviceIds)
        {
            return await _context.Services
                .Where(s => serviceIds.Contains(s.Id))
                .ToListAsync();
        }

        public async Task<List<BookConsultation>> GetAllWithServicesAsync()
        {
            return await _context.BookConsultations
                .Include(b => b.Services)
                .Include(b => b.Notes)
                .ToListAsync();
        }

        public async Task<BookConsultation?> GetByIdAsync(int id)
        {
            return await _context.BookConsultations
                .Include (b => b.Services)  
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<bool> UpdateAsync(BookConsultation consultation)
        {
            _context.BookConsultations.Update(consultation);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteAsync(BookConsultation consultation)
        {
            _context.BookConsultations.Remove(consultation);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<BookConsultation?> GetByEmailAsync(string email)
        {
            return await _context.BookConsultations
                .FirstOrDefaultAsync(u => u.Email == email);
        }

    }
}

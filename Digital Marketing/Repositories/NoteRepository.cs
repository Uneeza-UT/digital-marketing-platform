using Digital_Marketing.Data;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Digital_Marketing.Repositories
{
    public class NoteRepository : INoteRepository
    {
        private readonly ApplicationDbContext _context;

        public NoteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Note>> GetNotesWithConsultationIdAsync(int consultationId)
        {
            return await _context.Notes
                .Where(n => n.BookConsultationId == consultationId)
                .Include(n => n.User)
                .ToListAsync();
        }

        public async Task Add(Note note)
        {
            await _context.Notes.AddAsync(note);
            await _context.SaveChangesAsync();
        }

        public async Task<BookConsultation?> GetConsultationByIdsAsync(int consultationId)
        {
            return await _context.BookConsultations      
                .FirstOrDefaultAsync(b => b.Id == consultationId);
        }


        public async Task<Note?> GetByIdAsync(int id)
        {
            return await _context.Notes
                .Include(n => n.User) 
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<bool> UpdateAsync(Note note)
        {
            _context.Notes.Update(note);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(Note note)
        {
            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}

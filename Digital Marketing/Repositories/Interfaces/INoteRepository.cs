using Digital_Marketing.Models;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface INoteRepository
    {
        Task<List<Note>> GetNotesWithConsultationIdAsync(int consultationId);
        Task Add(Note note);
        Task<BookConsultation?> GetConsultationByIdsAsync(int consultationId);
        Task<Note?> GetByIdAsync(int id);
        Task<bool> UpdateAsync(Note note);
        Task<bool> DeleteAsync(Note note);
    }
}

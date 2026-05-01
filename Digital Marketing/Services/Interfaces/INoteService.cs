using Digital_Marketing.DTOs.Note;

namespace Digital_Marketing.Services.Interfaces
{
    public interface INoteService
    {
        Task<List<NoteResponseDto>> GetNotesWithConsultationIdAsync(int consultationId);
        Task CreateNoteAsync(NoteCreateDto noteCreateDto);
        Task<bool> UpdateNoteAsync(NoteUpdateDto noteUpdateDto);
        Task<bool> DeleteNoteAsync(int id);
    }
}

using AutoMapper;
using Digital_Marketing.DTOs.Note;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Services
{
    public class NoteService : INoteService
    {
        private readonly INoteRepository _noteRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public NoteService(INoteRepository noteRepository, IMapper mapper, IUserRepository userRepository)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
            _userRepository = userRepository;
        }

        public async Task<List<NoteResponseDto>> GetNotesWithConsultationIdAsync(int consultationId)
        {
            var notes = await _noteRepository.GetNotesWithConsultationIdAsync(consultationId);
            return _mapper.Map<List<NoteResponseDto>>(notes);
        }

        public async Task CreateNoteAsync(NoteCreateDto noteCreateDto)
        {
            var note = _mapper.Map<Note>(noteCreateDto);
            note.CreatedAt = DateTime.UtcNow;

            var consultation = await _noteRepository.GetConsultationByIdsAsync(noteCreateDto.BookConsultationId);

            if (consultation != null)   note.BookConsultation = consultation;

            var user = await _userRepository.GetByIdAsync(noteCreateDto.UserId);

            if (user != null)   note.User = user;

            await _noteRepository.Add(note);
        }

        public async Task<bool> UpdateNoteAsync(NoteUpdateDto noteUpdateDto)
        {
            var note = await _noteRepository.GetByIdAsync(noteUpdateDto.Id);
            if (note == null) return false;

            _mapper.Map(noteUpdateDto, note);
            note.UpdatedAt = DateTime.UtcNow;

            return await _noteRepository.UpdateAsync(note);
        }

        public async Task<bool> DeleteNoteAsync(int id)
        {
            var note = await _noteRepository.GetByIdAsync(id);
            if (note == null) return false; // not found

            return await _noteRepository.DeleteAsync(note);
        }
    }
}

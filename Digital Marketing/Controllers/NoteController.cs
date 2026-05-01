using Digital_Marketing.DTOs.Note;
using Digital_Marketing.DTOs.User;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NoteController : ControllerBase
    {
        private readonly INoteService _noteService;

        public NoteController(INoteService noteService)
        {
            _noteService = noteService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateNote([FromBody] NoteCreateDto dto)
        {
            await _noteService.CreateNoteAsync(dto);

            var notes = await _noteService.GetNotesWithConsultationIdAsync(dto.BookConsultationId);
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNotesWithConsultationId(int id)
        {
            var notes = await _noteService.GetNotesWithConsultationIdAsync(id);
            return Ok(notes);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNote(int id, [FromBody] NoteUpdateDto dto)
        {
            if (id != dto.Id) return BadRequest("Id mismatch");

            await _noteService.UpdateNoteAsync(dto);
            return Ok(new { Message = "Note updated successfully." });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            var success = await _noteService.DeleteNoteAsync(id);

            if (!success)
                return NotFound($"Note with Id {id} not found.");

            return Ok($"Note with Id {id} deleted successfully.");
        }
    }
}

using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Client;
using Digital_Marketing.DTOs.Service;
using Digital_Marketing.Services;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookConsultationController : ControllerBase
    {
        private readonly IBookConsultationService _bookConsultationService;

        public BookConsultationController(IBookConsultationService bookConsultationService)
        {
            _bookConsultationService = bookConsultationService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBookConsultation([FromBody] BookConsultationCreateDto dto)
        {
            await _bookConsultationService.CreateBookConsultationAsync(dto);

            return Ok(new { Message = "Book consultation created successfully." });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBookConsultations()
        {
            var consultations = await _bookConsultationService.GetAllBookConsultationsAsync();
            return Ok(consultations);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BookConsultationResponseDto>> GetServiceById(int id)
        {
            var consultations= await _bookConsultationService.GetBookConsultationByIdAsync(id);

            if (consultations == null)
                return NotFound();

            return Ok(consultations);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] BookConsultationUpdateDto dto)
        {
            if (id != dto.Id) return BadRequest("Id mismatch");

            await _bookConsultationService.UpdateAsync(dto);
            return Ok(new { Message = "Book consultation updated successfully." });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsultation(int id)
        {
            var success = await _bookConsultationService.DeleteConsultationAsync(id);

            if (!success)
                return NotFound($"Consultation with Id {id} not found.");

            return Ok($"Consultation with Id {id} deleted successfully.");
        }
    }
}

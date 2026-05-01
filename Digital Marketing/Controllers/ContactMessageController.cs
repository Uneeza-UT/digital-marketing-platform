using Digital_Marketing.DTOs.ContactMessage;
using Microsoft.AspNetCore.Mvc;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactMessageController : ControllerBase
    {
        private readonly IContactMessageService _contactMessageService;

        public ContactMessageController(IContactMessageService contactMessageService)
        {
            _contactMessageService = contactMessageService;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(ContactMessageCreateDto dto)
        {
            await _contactMessageService.SendMessageAsync(dto);
            return Ok(new { Message = "Message sent successfully." });

        }
    }
}

using Digital_Marketing.DTOs.Client;
using Digital_Marketing.Services;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ClientResponseDto>>> GetAllClients()
        {
            var clients = await _clientService.GetAllClientsAsync();
            return Ok(clients);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClientResponseDto>> GetClientById(int id)
        {
            var clients = await _clientService.GetClientByIdAsync(id);

            if (clients == null)
                return NotFound();

            return Ok(clients);
        }

        [HttpPost]
        public async Task<IActionResult> CreateClient([FromBody] ClientCreateDto dto)
        {
            var success = await _clientService.CreateClientAsync(dto);

            if (!success)
                return Conflict(new { Message = "Client with this email already exists" }); // 409

            return Ok(new { Message = "Client created successfully." });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClient(int id, [FromBody] ClientUpdateDto dto)
        {
            if (id != dto.Id) return BadRequest("Id mismatch");

            var success = await _clientService.UpdateClientAsync(dto);

            if (!success)
                return Conflict(new { Message = "Client with this email already exists" }); // 409

            return Ok(new { Message = "Client updated successfully." });
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchClient(int id, [FromBody] ClientPatchDto dto)
        {
            if (id != dto.Id) return BadRequest("Id mismatch");

            await _clientService.PatchClientAsync(dto);
            return Ok(new { Message = "Client updated successfully." });
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var success = await _clientService.DeleteClientAsync(id);

            if (!success)
                return NotFound($"Client with Id {id} not found.");

            return Ok($"Client with Id {id} deleted successfully.");
        }
    }
}

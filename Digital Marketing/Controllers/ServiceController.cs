using Digital_Marketing.DTOs.Service;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceService _serviceService;
        public ServiceController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ServiceResponseDto>>> GetAllServices()
        {
            var services = await _serviceService.GetAllServicesAsync();
            return Ok(services);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponseDto>> GetServiceById(int id)
        {
            var service = await _serviceService.GetServiceByIdAsync(id);

            if (service == null)
                return NotFound();

            return Ok(service);
        }

        [HttpPost]
        public async Task<IActionResult> CreateService([FromBody] ServiceCreateDto dto)
        {
            var success = await _serviceService.CreateServiceAsync(dto);

            if (!success)
                return Conflict(new { Message = "Service with this name already exists" }); // 409

            return Ok(new { Message = "Service created successfully." });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateService(int id, [FromBody] ServiceUpdateDto dto)
        {
            if (id != dto.Id) return BadRequest("Id mismatch");

            var success = await _serviceService.UpdateServiceAsync(dto);

            if (!success)
                return Conflict(new { Message = "Service with this name already exists" }); // 409

            return Ok(new { Message = "Service updated successfully." });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteService(int id)
        {
            var success = await _serviceService.DeleteServiceAsync(id);

            if (!success)
                return NotFound($"Service with Id {id} not found.");

            return Ok($"Service with Id {id} deleted successfully.");
        }
    }
}

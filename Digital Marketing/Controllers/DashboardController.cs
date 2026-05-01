using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardService _dashboardService;

        public DashboardController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpGet("stats")]
        public async Task<IActionResult> GetStats()
        {
            var stats = await _dashboardService.GetStatsAsync();
            return Ok(stats);
        }

        [HttpGet("consultations")]
        public async Task<IActionResult> GetRecentConsultations()
        {
            var consultations = await _dashboardService.GetConsultationsAsync();
            return Ok(consultations);
        }
    }
}

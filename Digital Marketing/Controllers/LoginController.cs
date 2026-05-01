using Microsoft.AspNetCore.Mvc;
using Digital_Marketing.Services.Interfaces;
using Digital_Marketing.DTOs.Login;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController: ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var token = await _loginService.LoginAsync(dto);

            if (token == null)
                return Unauthorized();

            return Ok(new { token });
        }
    }
}

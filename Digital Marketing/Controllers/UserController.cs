using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Client;
using Digital_Marketing.DTOs.User;
using Digital_Marketing.Services;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserCreateDto dto)
        {
            var success = await _userService.CreateUserAsync(dto);

            if (!success)
                return Conflict(new { Message = "User with this email already exists" }); // 409

            return Ok(new { Message = "User created successfully." });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserResponseDto>> GetUserById(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);

            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpGet("profile")]
        public async Task<IActionResult> GetUserData()
{
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
                return NotFound();

            var user = await _userService.GetUserByIdAsync(int.Parse(userId));

            if (user == null)
                return NotFound();

            return Ok(user);
        }


        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] UserUpdateDto dto)
        {
            var success = await _userService.UpdateUserAsync(dto);

            if (!success)
                return Conflict(new { Message = "User with this email already exists" }); // 409

            return Ok(new { Message = "User updated successfully." });
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UserStatusUpdateDto dto)
        {
            if (id != dto.Id) return BadRequest("Id mismatch");

            await _userService.UpdateStatusAsync(dto);
            return Ok(new { Message = "Employee status updated successfully." });
        }

        [HttpPatch("last-login")]
        public async Task<IActionResult> UpdateLastLogin([FromBody] UserLastLoginUpdateDto dto)
        {
            await _userService.UpdateLastLoginAsync(dto);
            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var success = await _userService.DeleteUserAsync(id);

            if (!success)
                return NotFound($"User with Id {id} not found.");

            return Ok($"User with Id {id} deleted successfully.");
        }
    }
}

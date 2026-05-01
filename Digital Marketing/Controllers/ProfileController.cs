using Digital_Marketing.DTOs.Profile;
using Digital_Marketing.Models;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Digital_Marketing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpPatch]
        public async Task<IActionResult> UpdateProfile([FromBody] ProfileUpdateDto profileUpdateDto)
        {
            var user = await _profileService.UpdateProfileAsync(profileUpdateDto);
            if (user == null)
                return NotFound(new { Message = "User with this email already exists!" });

            return Ok(user);

        }

        [HttpPatch("image")]
        public async Task<IActionResult> UpdateProfileImage([FromForm] ProfileImageUpdateDto profileImageUpdateDto)
        {
            
            try
            {
                var success = await _profileService.UpdateProfileImageAsync(profileImageUpdateDto);
                if (!success)
                    return NotFound(new { Message = "Failed to update profile image!" });

                return Ok(new { Message = "Profile image updated successfully." });
            }
            catch (Exception ex)
            {
                Console.WriteLine("🔥 ERROR:");
                Console.WriteLine(ex.ToString());
                return StatusCode(500, ex.Message);
            }
            
        }

        [HttpPatch("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto changePasswordDto)
        {
            var user = await _profileService.ChangePasswordAsync(changePasswordDto);
            if (user == null)
                return NotFound(new { Message = "Failed to change password!" });

            return Ok(user);
        }
    }
}

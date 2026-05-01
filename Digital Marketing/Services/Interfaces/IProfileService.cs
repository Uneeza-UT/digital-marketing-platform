using Digital_Marketing.DTOs.Profile;
using Digital_Marketing.DTOs.User;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IProfileService
    {
        Task<UserResponseDto?> UpdateProfileAsync(ProfileUpdateDto profileUpdateDto);
        Task<bool> UpdateProfileImageAsync(ProfileImageUpdateDto profileImageUpdateDto);
        Task<UserResponseDto?> ChangePasswordAsync(ChangePasswordDto changePasswordDto);
    }
}

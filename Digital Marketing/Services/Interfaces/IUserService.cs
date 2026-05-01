using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Client;
using Digital_Marketing.DTOs.User;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IUserService
    {
        Task<List<UserResponseDto>> GetAllUsersAsync();
        Task<UserResponseDto?> GetUserByIdAsync(int id);
        Task<bool> CreateUserAsync(UserCreateDto userCreateDto);
        Task<bool> UpdateUserAsync(UserUpdateDto userUpdateDto);
        Task<bool> UpdateStatusAsync(UserStatusUpdateDto dto);
        Task<bool> UpdateLastLoginAsync(UserLastLoginUpdateDto dto);
        Task<bool> DeleteUserAsync(int id);
    }
}

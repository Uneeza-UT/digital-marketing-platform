using Digital_Marketing.DTOs.Login;

namespace Digital_Marketing.Services.Interfaces
{
    public interface ILoginService
    {
        Task<string?> LoginAsync(LoginDto dto);
    }
}

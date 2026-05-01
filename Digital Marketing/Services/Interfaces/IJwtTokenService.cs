using Digital_Marketing.Models;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IJwtTokenService
    {
        string GenerateJwtToken(User user);
    }
}

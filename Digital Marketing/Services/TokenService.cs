using Digital_Marketing.Services.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace Digital_Marketing.Services
{
    public class TokenService : ITokenService
    {
        public string GenerateToken()
        {
            var bytes = RandomNumberGenerator.GetBytes(32);
            return Convert.ToBase64String(bytes);
        }

        public string HashToken(string token)
        {
            var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(token));
            return Convert.ToBase64String(bytes);
        }
    }
}

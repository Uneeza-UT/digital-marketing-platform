using Digital_Marketing.Data.Configurations;
using Digital_Marketing.Models;
using Digital_Marketing.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Digital_Marketing.Services
{
    public class JwtTokenService : IJwtTokenService
    {
        private readonly JwtSettings _jwtSettings;

        public JwtTokenService(IOptions<JwtSettings> jwtOptions)
        {
            _jwtSettings = jwtOptions.Value;
        }

        public string GenerateJwtToken(User user)
        {
            // 🔹 Claims (data inside token)
            var claims = new[]
            {
            new Claim(ClaimTypes.Name, user.Email),
            new Claim(ClaimTypes.Role, user.Role ?? "User"),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
        };

            // 🔹 Secret key from appsettings
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_jwtSettings.Key)
            );

            // 🔹 Signing credentials
            var creds = new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256
            );

            // 🔹 Token creation
            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(_jwtSettings.ExpiryMinutes),
                signingCredentials: creds
            );

            // 🔹 Convert to string
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

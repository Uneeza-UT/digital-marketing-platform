using Digital_Marketing.DTOs.Login;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Digital_Marketing.Services
{
    public class LoginService : ILoginService
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtTokenService _jwtTokenService;

        public LoginService(IUserRepository userRepository, IJwtTokenService jwtTokenService)
        {
            _userRepository = userRepository;
            _jwtTokenService = jwtTokenService;
        }

        public async Task<string?> LoginAsync(LoginDto dto)
        {
            var passwordHasher = new PasswordHasher<User>();

            var user = await _userRepository.GetByEmailAsync(dto.Email);

            if (user == null)
                return null;

            var result = passwordHasher.VerifyHashedPassword(
                user,
                user.PasswordHash,
                dto.Password
            );

            if (result != PasswordVerificationResult.Success)
            {
                return null;
            }

            return _jwtTokenService.GenerateJwtToken(user);

        }
    }
}


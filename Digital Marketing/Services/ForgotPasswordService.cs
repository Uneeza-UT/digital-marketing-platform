using AutoMapper;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Digital_Marketing.Services
{
    public class ForgotPasswordService : IForgotPasswordService
    {
        private readonly IForgotPasswordRepository _forgotPasswordRepository;
        private readonly IUserRepository _userRepository;
        private readonly IEmailService _emailService;
        private readonly ITokenService _tokenService;

        public ForgotPasswordService(IForgotPasswordRepository forgotPasswordRepository, IUserRepository userRepository, IEmailService emailService, ITokenService tokenService)
        {
            _forgotPasswordRepository = forgotPasswordRepository;
            _userRepository = userRepository;
            _emailService = emailService;
            _tokenService = tokenService;
        }

        public async Task ForgotPasswordAsync(string email)
        {
            var user = await _userRepository.GetByEmailAsync(email);
            if (user == null) return; // don't reveal

            var token = _tokenService.GenerateToken();
            var tokenHash = _tokenService.HashToken(token);

            var resetToken = new ForgotPassword
            {
                UserId = user.Id,
                TokenHash = tokenHash,
                ExpiryTime = DateTime.UtcNow.AddMinutes(15),
                IsUsed = false
            };

            await _forgotPasswordRepository.CreateAsync(resetToken);

            var resetLink = $"http://localhost:5173/change-password?token={token}";
            await _emailService.SendAsync(user.Email, "Reset Password", resetLink);
        }

        public async Task ResetPasswordAsync(string token, string newPassword)
        {
            var tokenHash = _tokenService.HashToken(token);

            var resetToken = await _forgotPasswordRepository.GetValidTokenAsync(tokenHash);

            if (resetToken == null)
                throw new Exception("Invalid or expired token");

            var user = await _userRepository.GetByIdAsync(resetToken.UserId);

            if (user == null)
                throw new Exception("User not found");

            var passwordHasher = new PasswordHasher<User>();
            user.PasswordHash = passwordHasher.HashPassword(user, newPassword);

            resetToken.IsUsed = true;

            await _userRepository.UpdateAsync(user);
            await _forgotPasswordRepository.UpdateAsync(resetToken);
        }
    }
}

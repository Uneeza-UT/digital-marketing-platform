using AutoMapper;
using Digital_Marketing.DTOs.Profile;
using Digital_Marketing.DTOs.User;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using static System.Net.Mime.MediaTypeNames;

namespace Digital_Marketing.Services
{
    public class ProfileService : IProfileService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public ProfileService(IUserRepository userRepository, IMapper mapper    )
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<UserResponseDto?> UpdateProfileAsync(ProfileUpdateDto profileUpdateDto)
        {
            var user = await _userRepository.GetByIdAsync(profileUpdateDto.Id);
            if (user == null) return null;

            if (!string.IsNullOrEmpty(profileUpdateDto.Email))
            {
                var exists = await _userRepository.ExistsByEmailAsync(profileUpdateDto.Email, profileUpdateDto.Id);
                if (exists) return null;
            }

            user.Name = profileUpdateDto.Name ?? user.Name;
            user.Email = profileUpdateDto.Email ?? user.Email;

            user.UpdatedAt = DateTime.UtcNow;
            await _userRepository.UpdateAsync(user);

            return _mapper.Map<UserResponseDto>(user);
        }

        public async Task<bool> UpdateProfileImageAsync(ProfileImageUpdateDto profileImageUpdateDto)
        {
            try
            {
                var fileName = Guid.NewGuid() + Path.GetExtension(profileImageUpdateDto.ImageFile.FileName);
                var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads");

                if (!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }

                var path = Path.Combine(uploadPath, fileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await profileImageUpdateDto.ImageFile.CopyToAsync(stream);
                }

                var user = await _userRepository.GetByIdAsync(profileImageUpdateDto.Id);
                if (user == null) return false;

                user.UpdatedAt = DateTime.UtcNow;

                user.ProfileImageUrl = "/uploads/" + fileName;
                return await _userRepository.UpdateAsync(user);
            }

            catch (Exception ex)
            {
                Console.WriteLine("🔥 ERROR:");
                Console.WriteLine(ex.ToString());         
            }
            return true;
        }

        public async Task<UserResponseDto?> ChangePasswordAsync(ChangePasswordDto changePasswordDto)
        {
            var user = await _userRepository.GetByIdAsync(changePasswordDto.Id);
            if (user == null) return null;

            var passwordHasher = new PasswordHasher<User>();
            var isValid = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, changePasswordDto.OldPassword);

            if (isValid == PasswordVerificationResult.Failed) return null;

            // set new password
            user.PasswordHash = passwordHasher.HashPassword(user, changePasswordDto.NewPassword);

            user.UpdatedAt = DateTime.UtcNow;
            await _userRepository.UpdateAsync(user);

            return _mapper.Map<UserResponseDto>(user);

        }
    }
}

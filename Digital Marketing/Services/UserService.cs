using AutoMapper;
using Digital_Marketing.DTOs.Client;
using Digital_Marketing.DTOs.User;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Digital_Marketing.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;   

        public UserService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<List<UserResponseDto>> GetAllUsersAsync()
        {
            var users = await _userRepository.GetAllUsersAsync();
            return _mapper.Map<List<UserResponseDto>>(users);
        }

        public async Task<UserResponseDto?> GetUserByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            return _mapper.Map<UserResponseDto>(user);
        }

        public async Task<bool> CreateUserAsync(UserCreateDto userCreateDto)
        {
            var exists = await _userRepository.GetByEmailAsync(userCreateDto.Email);
            if (exists != null) return false;

            var passwordHasher = new PasswordHasher<User>(); // Employee is your model
            var user = _mapper.Map<User>(userCreateDto);

            // Hash the password
            user.PasswordHash = passwordHasher.HashPassword(user, userCreateDto.PasswordHash);
            
            await _userRepository.Add(user);
            return true;
        }

        public async Task<bool> UpdateUserAsync(UserUpdateDto userUpdateDto)
        {
            var user = await _userRepository.GetByIdAsync(userUpdateDto.Id);
            if (user == null) return false;

            var exists = await _userRepository.ExistsByEmailAsync(userUpdateDto.Email, userUpdateDto.Id);
            if (exists) return false;

            _mapper.Map(userUpdateDto, user);
            user.UpdatedAt = DateTime.UtcNow;

            return await _userRepository.UpdateAsync(user);
        }

        public async Task<bool> UpdateStatusAsync(UserStatusUpdateDto dto)
        {
            var user = await _userRepository.GetByIdAsync(dto.Id);

            if (user == null) return false;

            _mapper.Map(dto, user);

            await _userRepository.SaveChangesAsync();

            return true;
        }

        public async Task<bool> UpdateLastLoginAsync(UserLastLoginUpdateDto dto) 
        {             
            var user = await _userRepository.GetByIdAsync(dto.Id);
            if (user == null) return false;

            _mapper.Map(dto, user);
            await _userRepository.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return false; // not found

            return await _userRepository.DeleteAsync(user);
        }
    }
}

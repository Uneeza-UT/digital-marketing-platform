using AutoMapper;
using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Client;
using Digital_Marketing.DTOs.Service;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Services
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _repository;
        private readonly IBookConsultationRepository _consultationRepository;
        private readonly IMapper _mapper;

        public ClientService(IClientRepository repository, IBookConsultationRepository consultationRepository, IMapper mapper)
        {
            _repository = repository;
            _consultationRepository = consultationRepository;
            _mapper = mapper;
        }


        public async Task<bool> CreateClientAsync(ClientCreateDto dto)
        {
            var exists = await _repository.ExistsByEmailAsync(dto.Email);

            if (exists) return false;

            var client = _mapper.Map<Client>(dto);
            client.CreatedAt = DateTime.UtcNow;
            client.Status = "Active";

            var services = await _repository.GetServicesByIdsAsync(dto.ServiceIds);

            client.Services = services;

            await _repository.Add(client);
            return true;
        }

        public async Task<List<ClientResponseDto>> GetAllClientsAsync()
        {
            var clients = await _repository.GetAllWithServicesAsync();
            return _mapper.Map<List<ClientResponseDto>>(clients);
        }

        public async Task<ClientResponseDto?> GetClientByIdAsync(int id)
        {
            var client = await _repository.GetByIdAsync(id);
            return _mapper.Map<ClientResponseDto>(client);
        }

        public async Task<bool> UpdateClientAsync(ClientUpdateDto dto)
        {
            var client = await _repository.GetByIdAsync(dto.Id);
            if (client == null) return false;

            var exists = await _repository.ExistsByEmailAsync(dto.Email, dto.Id);
            if (exists) return false;

            _mapper.Map(dto, client);

            client.UpdatedAt = DateTime.UtcNow;

            client.Services.Clear();
            var services = await _repository.GetServicesByIdsAsync(dto.ServiceIds);
            client.Services = services;

            return await _repository.UpdateAsync(client);
        }

        public async Task<bool> PatchClientAsync(ClientPatchDto dto)
        {
            var client = await _repository.GetByIdAsync(dto.Id);

            if (client == null) return false;

            _mapper.Map(dto, client);
            client.UpdatedAt = DateTime.UtcNow;

            await _repository.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteClientAsync(int id)
        {
            var client = await _repository.GetByIdAsync(id);
            if (client == null) return false; // not found
            
            var consultations = await _consultationRepository.GetByEmailAsync(client.Email);
            if(consultations != null) consultations.IsConvertedToClient = false;

            return await _repository.DeleteAsync(client);
        }
    }
}

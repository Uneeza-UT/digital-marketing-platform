using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.DTOs.Service;
using Digital_Marketing.Models;
using AutoMapper;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Services
{
    public class ServiceService : IServiceService
    {
        private readonly IServiceRepository _serviceRepository;
        private readonly IMapper _mapper;

        public ServiceService(IServiceRepository serviceRepository, IMapper mapper)
        {
            _serviceRepository = serviceRepository;
            _mapper = mapper;
        }

        public async Task<List<ServiceResponseDto>> GetAllServicesAsync()
        {
            var services = await _serviceRepository.GetAllServicesAsync();
            return _mapper.Map<List<ServiceResponseDto>>(services);
        }

        public async Task<ServiceResponseDto?> GetServiceByIdAsync(int id)
        {
            var service = await _serviceRepository.GetByIdAsync(id);
            return _mapper.Map<ServiceResponseDto>(service);
        }

        public async Task<bool> CreateServiceAsync(ServiceCreateDto serviceCreateDto)
        {
            var exists = await _serviceRepository.ExistsByNameAsync(serviceCreateDto.Name);

            if (exists)  return false;
           

            var service = _mapper.Map<Service>(serviceCreateDto);
            service.IsActive = true;
            service.CreatedAt = DateTime.UtcNow;

            await _serviceRepository.Add(service);
            return true;
        }

        public async Task<bool> UpdateServiceAsync(ServiceUpdateDto serviceUpdateDto)
        {
            var service = await _serviceRepository.GetByIdAsync(serviceUpdateDto.Id);
            if (service == null) return false;

            var exists = await _serviceRepository.ExistsByNameAsync(serviceUpdateDto.Name, serviceUpdateDto.Id);
            if (exists) return false;

            _mapper.Map(serviceUpdateDto, service);
            service.UpdatedAt = DateTime.UtcNow;

             return await _serviceRepository.UpdateAsync(service);
        }

        public async Task<bool> DeleteServiceAsync(int id)
        {
            var service = await _serviceRepository.GetByIdAsync(id);
            if (service == null) return false; // not found

            return await _serviceRepository.DeleteAsync(service);
        }
    }
}

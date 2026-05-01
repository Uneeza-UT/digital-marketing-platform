using Digital_Marketing.DTOs.Service;  

namespace Digital_Marketing.Services.Interfaces
{
    public interface IServiceService
    {
        Task<List<ServiceResponseDto>> GetAllServicesAsync();
        Task<ServiceResponseDto?> GetServiceByIdAsync(int id);
        Task<bool> CreateServiceAsync(ServiceCreateDto serviceCreateDto);
        Task<bool> UpdateServiceAsync(ServiceUpdateDto serviceUpdateDto);
        Task<bool> DeleteServiceAsync(int id);
    }
}

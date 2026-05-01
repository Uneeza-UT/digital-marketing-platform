using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Client;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IClientService
    {
        Task<bool> CreateClientAsync(ClientCreateDto dto);
        Task<List<ClientResponseDto>> GetAllClientsAsync();
        Task<ClientResponseDto?> GetClientByIdAsync(int id);
        Task<bool> UpdateClientAsync(ClientUpdateDto dto);
        Task<bool> PatchClientAsync(ClientPatchDto dto);
        Task<bool> DeleteClientAsync(int id);
    }
}

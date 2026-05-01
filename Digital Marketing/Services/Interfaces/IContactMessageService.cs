using Digital_Marketing.DTOs.ContactMessage;

namespace Digital_Marketing.Services.Interfaces
{
    public interface IContactMessageService
    {
        Task SendMessageAsync(ContactMessageCreateDto dto);
    }
}

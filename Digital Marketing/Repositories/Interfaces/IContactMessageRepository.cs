using Digital_Marketing.Models;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IContactMessageRepository
    {
        Task Add(ContactMessage contactMessage);
    }
}

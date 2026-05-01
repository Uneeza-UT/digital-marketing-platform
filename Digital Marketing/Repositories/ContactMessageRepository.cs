using Digital_Marketing.Data;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;

namespace Digital_Marketing.Repositories
{
    public class ContactMessageRepository: IContactMessageRepository
    {
        private readonly ApplicationDbContext _context;

        public ContactMessageRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Add(ContactMessage contactMessage)
        {
            await _context.ContactMessages.AddAsync(contactMessage);
            await _context.SaveChangesAsync();
        }
    }
}

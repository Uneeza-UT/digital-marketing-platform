using AutoMapper;
using Digital_Marketing.DTOs.ContactMessage;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Services
{
    public class ContactMessageService: IContactMessageService
    {
        private readonly IContactMessageRepository _repository;
        private readonly IMapper _mapper;

        public ContactMessageService(IContactMessageRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task SendMessageAsync(ContactMessageCreateDto dto)
        {
            var contactMessage = _mapper.Map<ContactMessage>(dto);
            contactMessage.CreatedAt = DateTime.UtcNow;

            await _repository.Add(contactMessage);
        }
    }
}

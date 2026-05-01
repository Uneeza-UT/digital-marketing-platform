using AutoMapper;
using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.Models;
using Digital_Marketing.Repositories;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Services
{
    public class BookConsultationService : IBookConsultationService
    {
        private readonly IBookConsultationRepository _repository;
        private readonly IMapper _mapper;

        public BookConsultationService(IBookConsultationRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task CreateBookConsultationAsync(BookConsultationCreateDto dto)
        {
            var bookConsultation = _mapper.Map<BookConsultation>(dto);
            bookConsultation.CreatedAt = DateTime.UtcNow;
            bookConsultation.Status = "New";

            var services = await _repository.GetServicesByIdsAsync(dto.ServiceIds);

            bookConsultation.Services = services;

            await _repository.Add(bookConsultation);
        }

        public async Task<List<BookConsultationResponseDto>> GetAllBookConsultationsAsync()
        {
            var consultations = await _repository.GetAllWithServicesAsync();
            return _mapper.Map<List<BookConsultationResponseDto>>(consultations);
        }

        public async Task<BookConsultationResponseDto?> GetBookConsultationByIdAsync(int id)
        {
            var consultations= await _repository.GetByIdAsync(id);
            return _mapper.Map<BookConsultationResponseDto>(consultations);
        }

        public async Task<bool> UpdateAsync(BookConsultationUpdateDto dto)
        {
            var consultation = await _repository.GetByIdAsync(dto.Id);

            if (consultation == null) return false;

            _mapper.Map(dto, consultation);

            consultation.UpdatedAt = DateTime.UtcNow;

            return await _repository.UpdateAsync(consultation);
        }

        public async Task<bool> DeleteConsultationAsync(int id)
        {
            var consultation = await _repository.GetByIdAsync(id);
            if (consultation == null) return false; // not found

            return await _repository.DeleteAsync(consultation);
        }
    }
}

using AutoMapper;
using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.Dashboard;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services.Interfaces;

namespace Digital_Marketing.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly IDashboardRepository _repository;
        private readonly IMapper _mapper;

        public DashboardService(IDashboardRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<DashboardStatsDto> GetStatsAsync()
        {
            var totalConsultations = await _repository.GetTotalConsultations();
            var newClients = await _repository.GetNewClients();
            var activeServices = await _repository.GetActiveServices();
            var employeeCount = await _repository.GetEmployeeCount();

            return new DashboardStatsDto
            {
                TotalConsultations = totalConsultations,
                NewClients = newClients,
                ActiveServices = activeServices,
                EmployeeCount = employeeCount
            };
        }
        public async Task<List<BookConsultationResponseDto>> GetConsultationsAsync()
        {
            var consultations = await _repository.GetRecentConsultationsAsync();
            return _mapper.Map<List<BookConsultationResponseDto>>(consultations);
        }

    }
}

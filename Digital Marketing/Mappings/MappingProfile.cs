using AutoMapper;
using Digital_Marketing.Models;
using Digital_Marketing.DTOs.BookConsultation;
using Digital_Marketing.DTOs.ContactMessage;
using Digital_Marketing.DTOs.Service;
using Digital_Marketing.DTOs.Note;
using Digital_Marketing.DTOs.User;
using Digital_Marketing.DTOs.Client;

namespace Digital_Marketing.Mappings
{
    public class MappingProfile: Profile
    {
        public MappingProfile() { 
            CreateMap<BookConsultationCreateDto, BookConsultation>();
            CreateMap<BookConsultation, BookConsultationResponseDto>();
            CreateMap<BookConsultationUpdateDto, BookConsultation>();

            CreateMap<ContactMessageCreateDto, ContactMessage>();
            CreateMap<ContactMessage, ContactMessageResponseDto>();

            CreateMap<ServiceCreateDto, Service>();
            CreateMap<Service, ServiceResponseDto>();
            CreateMap<ServiceUpdateDto, Service>();

            CreateMap<NoteCreateDto, Note>();
            CreateMap<Note, NoteResponseDto>();
            CreateMap<NoteUpdateDto, Note>();

            CreateMap<UserCreateDto, User>();
            CreateMap<User, UserResponseDto>();
            CreateMap<UserUpdateDto, User>();
            CreateMap<UserStatusUpdateDto, User>();
            CreateMap<User, UserNoteResponseDto>();
            CreateMap<UserLastLoginUpdateDto, User>();

            CreateMap<ClientCreateDto, Client>();
            CreateMap<Client, ClientResponseDto>();
            CreateMap<ClientUpdateDto, Client>();
            CreateMap<ClientPatchDto, Client>();
        }
    }
}

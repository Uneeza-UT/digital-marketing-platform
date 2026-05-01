using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace Digital_Marketing.DTOs.Login
{
    public class LoginDto
    {
        public required String Email { get; set; }
        public required String Password { get; set; }   
    }
}

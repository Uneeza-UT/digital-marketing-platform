namespace Digital_Marketing.DTOs.Profile
{
    public class ChangePasswordDto
    {
        public int Id { get; set; }
        public required string OldPassword { get; set; }
        public required string NewPassword { get; set; }
    }
}

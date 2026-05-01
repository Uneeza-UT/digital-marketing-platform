namespace Digital_Marketing.DTOs.User
{
    public class UserStatusUpdateDto
    {
        public int Id { get; set; }
        public required bool IsActive { get; set; }
    }
}

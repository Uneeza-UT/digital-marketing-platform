namespace Digital_Marketing.Models
{
    public class ForgotPassword
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public required string TokenHash { get; set; }
        public bool IsUsed { get; set; }
        public DateTime ExpiryTime { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

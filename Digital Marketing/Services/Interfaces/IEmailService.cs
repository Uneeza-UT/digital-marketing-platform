namespace Digital_Marketing.Services.Interfaces
{
    public interface IEmailService
    {
        Task SendAsync(string to, string subject, string resetLink);
    }
}

namespace Digital_Marketing.Services.Interfaces
{
    public interface IForgotPasswordService
    {
        Task ForgotPasswordAsync(string email);
        Task ResetPasswordAsync(string token, string newPassword);
    }
}

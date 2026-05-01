using Digital_Marketing.Models;

namespace Digital_Marketing.Repositories.Interfaces
{
    public interface IForgotPasswordRepository
    {
        Task CreateAsync(ForgotPassword token);
        Task<bool> UpdateAsync(ForgotPassword token);
        Task<ForgotPassword?> GetValidTokenAsync(string tokenHash);
    }
}

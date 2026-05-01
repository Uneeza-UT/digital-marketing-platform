namespace Digital_Marketing.Services.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken();
        string HashToken(string token);
    }
}

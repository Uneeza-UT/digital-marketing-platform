using Digital_Marketing.Services.Interfaces;
using System.Net;
using System.Net.Mail;

namespace Digital_Marketing.Services
{
    public class EmailService : IEmailService
    {
        public async Task SendAsync(string to, string subject, string resetLink)
        {
            var body = $@"
            Hi,

            We received a request to reset your password.

            Click the link below to reset it:
            {resetLink}

            This link will expire in 15 minutes.

            If you didn’t request this, you can safely ignore this email.

            Thanks,
            Your App Team
            ";

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("uneeza.tukassar2000@gmail.com", "yzqj tojn xmyf jsdh"),
                EnableSsl = true,
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress("uneeza.tukassar2000@gmail.com"),
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };

            mailMessage.To.Add(to);

            await smtpClient.SendMailAsync(mailMessage);
        }
    }
}

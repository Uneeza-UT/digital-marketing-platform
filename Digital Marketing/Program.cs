using Digital_Marketing.Data;
using Digital_Marketing.Data.Configurations;
using Digital_Marketing.Repositories;
using Digital_Marketing.Repositories.Interfaces;
using Digital_Marketing.Services;
using Digital_Marketing.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var key = builder.Configuration["Jwt:Key"];

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(key))
    };
});

builder.Services.AddAuthorization();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});


builder.Services.AddAutoMapper(cfg =>
{
    cfg.AddMaps(AppDomain.CurrentDomain.GetAssemblies());
});

builder.Services.Configure<JwtSettings>(
    builder.Configuration.GetSection("Jwt")
);

builder.Services.AddScoped<IBookConsultationService, BookConsultationService>();
builder.Services.AddScoped<IBookConsultationRepository, BookConsultationRepository>();

builder.Services.AddScoped<IContactMessageService, ContactMessageService>();
builder.Services.AddScoped<IContactMessageRepository, ContactMessageRepository>();

builder.Services.AddScoped<IServiceService, ServiceService>();
builder.Services.AddScoped<IServiceRepository, ServiceRepository>();

builder.Services.AddScoped<IClientService, ClientService>();
builder.Services.AddScoped<IClientRepository, ClientRepository>();

builder.Services.AddScoped<INoteService, NoteService>();
builder.Services.AddScoped<INoteRepository, NoteRepository>();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddScoped<IForgotPasswordService, ForgotPasswordService>();
builder.Services.AddScoped<IForgotPasswordRepository, ForgotPasswordRepository>();

builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<ILoginService, LoginService>();
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();

builder.Services.AddScoped<IDashboardService, DashboardService>();
builder.Services.AddScoped<IDashboardRepository, DashboardRepository>();

builder.Services.AddScoped<IProfileService, ProfileService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        p => p.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseStaticFiles(); // default wwwroot

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "uploads")),
    RequestPath = "/uploads"
});


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();



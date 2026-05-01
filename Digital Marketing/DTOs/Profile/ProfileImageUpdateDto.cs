namespace Digital_Marketing.DTOs.Profile
{
    public class ProfileImageUpdateDto
    {
        public int Id { get; set; }
        public required IFormFile ImageFile { get; set; }
    }
}

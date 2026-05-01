namespace Digital_Marketing.DTOs.Client
{
    public class ClientPatchDto
    {
        public int Id { get; set; }
        public required string status { get; set; }
        public DateTime? LastContactedAt { get; set; }
    }
}

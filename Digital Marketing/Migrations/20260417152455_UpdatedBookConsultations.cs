using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Digital_Marketing.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedBookConsultations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsConvertedToClient",
                table: "BookConsultations",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsConvertedToClient",
                table: "BookConsultations");
        }
    }
}

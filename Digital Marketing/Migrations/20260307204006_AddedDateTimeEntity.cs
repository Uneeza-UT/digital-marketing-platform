using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Digital_Marketing.Migrations
{
    /// <inheritdoc />
    public partial class AddedDateTimeEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "ContactMessages",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "BookConsultations",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "ContactMessages");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "BookConsultations");
        }
    }
}

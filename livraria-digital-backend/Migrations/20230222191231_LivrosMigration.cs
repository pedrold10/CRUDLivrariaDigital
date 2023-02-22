using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace livraria_digital_backend.Migrations
{
    /// <inheritdoc />
    public partial class LivrosMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Livros",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Titulo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subtitulo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Resumo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuantidadePaginas = table.Column<int>(type: "int", nullable: false),
                    DataPublicacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Editora = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Edicao = table.Column<int>(type: "int", nullable: true),
                    Autor = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livros", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Livros");
        }
    }
}

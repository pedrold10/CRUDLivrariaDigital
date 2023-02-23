using System.ComponentModel.DataAnnotations;
namespace livraria_digital_backend.Models{
    public class Livro {
        public Guid Id { get; set; }
        [StringLength(100)]
        public string Titulo { get; set; }
        [StringLength(100)]
        public string? Subtitulo { get; set; }
        [StringLength(500)]
        public string? Resumo { get; set; }
        [Range(0, 1000)]
        public int QuantidadePaginas { get; set; }
        public DateTime DataPublicacao { get; set; }
        [StringLength(150)]
        public string Editora { get; set; }
        [Range(1, 99)]
        public int? Edicao { get; set; }
        [StringLength(150)]
        public string Autor { get; set; }
    }
}
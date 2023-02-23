using livraria_digital_backend.Data;
using livraria_digital_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace livraria_digital_backend.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class LivroController : Controller{
        private readonly LivrariaDigitalDbContext _livrariaDigitalDbContext;
        public LivroController(LivrariaDigitalDbContext livrariaDigitalDbContext){
            
            _livrariaDigitalDbContext = livrariaDigitalDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> ListarLivros(){
            var livros = await _livrariaDigitalDbContext.Livros.ToListAsync();
            return Ok(livros);
        }

        [HttpPost]
        public async Task<IActionResult> AdicionarLivro([FromBody] Livro livroRequest){
            livroRequest.Id = Guid.NewGuid();

            await _livrariaDigitalDbContext.Livros.AddAsync(livroRequest);
            await _livrariaDigitalDbContext.SaveChangesAsync();

            return Ok(livroRequest);

        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> ObterLivro([FromRoute] Guid id){
            var livro =
                await _livrariaDigitalDbContext.Livros.FirstOrDefaultAsync(x => x.Id == id);
                
            if (livro == null){
                return NotFound();
            }

            return Ok(livro);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> AtualizarLivro([FromRoute] Guid id, Livro atualizarLivroRequest){
            var livro = await _livrariaDigitalDbContext.Livros.FindAsync(id);
            
            if(livro == null){
                return NotFound();
            }

            livro.Titulo = atualizarLivroRequest.Titulo;
            livro.Subtitulo = atualizarLivroRequest.Subtitulo;
            livro.Resumo = atualizarLivroRequest.Resumo;
            livro.QuantidadePaginas = atualizarLivroRequest.QuantidadePaginas;
            livro.DataPublicacao = atualizarLivroRequest.DataPublicacao;
            livro.Editora = atualizarLivroRequest.Editora;
            livro.Edicao = atualizarLivroRequest.Edicao;
            livro.Autor = atualizarLivroRequest.Autor;

            await _livrariaDigitalDbContext.SaveChangesAsync();

            return Ok(livro);


        }
    
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletarLivro([FromRoute] Guid id){
            var livro = await _livrariaDigitalDbContext.Livros.FindAsync(id);

            if(livro == null){
                return NotFound();
            }
            _livrariaDigitalDbContext.Livros.Remove(livro);
            await _livrariaDigitalDbContext.SaveChangesAsync();

            return Ok(livro);
        }
    }


}
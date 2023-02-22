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
    }
}
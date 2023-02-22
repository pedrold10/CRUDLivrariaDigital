using livraria_digital_backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace livraria_digital_backend.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class LivrosController : Controller {
        private readonly LivrariaDigitalDbContext _livrariaDigitalDbContext;
        public LivrosController(LivrariaDigitalDbContext livrariaDigitalDbContext){
            _livrariaDigitalDbContext = livrariaDigitalDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllLivros(){
            var livros = await _livrariaDigitalDbContext.Livros.ToListAsync();
            return Ok(livros);
        }
    }
}
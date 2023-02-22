using livraria_digital_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace livraria_digital_backend.Data{
    public class LivrariaDigitalDbContext: DbContext {
        public LivrariaDigitalDbContext(DbContextOptions options): base(options){
            
        }   
        public DbSet<Livro> Livros{get; set;}
    }
}
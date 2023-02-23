import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit{
  
  livroAtributos: Livro = {
    id: "",
    titulo: "",
    subtitulo: "",
    resumo: "",
    quantidadePaginas: 0,
    dataPublicacao: new Date("0000-00-00"),
    editora: "",
    edicao: 0,
    autor: ""
  }

  constructor(private route: ActivatedRoute,
    private livrosService: LivrosService,
    private router: Router) {
  
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");

        if(id){
          this.livrosService.obterLivro(id)
          .subscribe({
            next: (response) => {
              this.livroAtributos = response;
            }
          });
        }
      }
    })
  }

  atualizarLivro(){
    this.livrosService.atualizarLivro(this.livroAtributos.id, this.livroAtributos)
    .subscribe({
      next: (response) => {
        this.router.navigate(["livros"])
      }
    });
  }

  deletarLivro(id: string){
    this.livrosService.deletarLivro(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(["livros"])
      }
    })
  }
}

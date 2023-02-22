import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent {

  adicionarLivroRequest: Livro = {
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

  constructor(private livrosService: LivrosService,
    private router: Router) {

  }

  ngOnInit(): void{

  }

  adicionarLivro(){
    this.livrosService.adicionarLivro(this.adicionarLivroRequest)
    .subscribe({
      next: (livro) => {
        this.router.navigate(["livros"])
      },

    });

  }
}

import {Component, OnInit} from '@angular/core';
import {LivroService} from "../../services/livro.service";
import {Livro} from "../../models/livro.model";

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit{
  livros: Livro[] = [
    {
      id: '123',
      titulo: 'O Senhor dos Anéis',
      subtitulo: 'A Sociedade do Anel',
      resumo: 'Um jovem hobbit precisa levar um anel mágico até o fogo onde foi forjado, na esperança de destruí-lo e salvar a Terra Média da escuridão.',
      quantidadePaginas: 576,
      dataPublicacao: new Date('1954-07-29'),
      editora: 'Allen & Unwin',
      edicao: 1,
      autor: 'J.R.R. Tolkien'
    }
  ];
  constructor(private livroService: LivroService){

  }

  ngOnInit(): void {
    this.livroService.listarLivros()
      .subscribe({
          next: (livros) => this.livros = livros,
          error: (response) => console.log(response)
        }
      );
  }
}

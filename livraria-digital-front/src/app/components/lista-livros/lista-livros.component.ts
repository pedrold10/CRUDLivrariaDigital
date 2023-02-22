import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  livros: Livro[] = [
    {
      id: "d604c291-5a45-4f7c-bf97-8167227c4e4f",
      titulo: "O Senhor dos Anéis",
      subtitulo: "A Sociedade do Anel",
      resumo: "Uma grande aventura para um pequeno hobbit",
      quantidadePaginas: 423,
      dataPublicacao: new Date(1954, 7, 29),
      editora: "Martins Fontes",
      edicao: 1,
      autor: "J.R.R. Tolkien"
    },
    {
      "id": "b327ab44-1c27-43e6-a46d-bb3dd6f3c6d7",
      "titulo": "Dom Casmurro",
      "subtitulo": "Edição Comentada",
      "resumo": "Romance do autor brasileiro Machado de Assis.",
      "quantidadePaginas": 256,
      "dataPublicacao": new Date(2015, 6, 8),
      "editora": "Companhia das Letras",
      "edicao": 1,
      "autor": "Machado de Assis"
    }
  ];
  
  constructor() {
    
  }

  ngOnInit(): void{
    this.livros.push()

  }
}

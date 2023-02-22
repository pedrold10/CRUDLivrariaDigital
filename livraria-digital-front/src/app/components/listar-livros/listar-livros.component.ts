import {Component, OnInit} from '@angular/core';
import {LivroService} from "../../services/livro.service";
import {Livro} from "../../models/livro.model";

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit{
  livros: Livro[] = [];
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

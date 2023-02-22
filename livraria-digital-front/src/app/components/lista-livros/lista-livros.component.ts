import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  livros: Livro[] = [];
  
  constructor(private livrosService: LivrosService) {
    
  }

  ngOnInit(): void{
    this.livrosService.listarLivros()
    .subscribe({
      next: (livros) => {
        this.livros = livros;
      },
      error: (response) => {
        console.log(response)
      }

    });

  }
}

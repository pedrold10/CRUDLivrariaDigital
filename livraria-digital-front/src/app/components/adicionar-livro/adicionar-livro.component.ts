import {Component, OnInit} from '@angular/core';
import {Livro} from "../../models/livro.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LivroService} from "../../services/livro.service";

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit{
  adicionarLivroRequest: Livro = {
    id: "",
    titulo: "",
    subtitulo: "",
    resumo: "",
    quantidadePaginas: 0,
    dataPublicacao: new Date("0000-00-00"),
    editora: "",
    edicao: 0,
    autor: "string"
  }
  constructor(private route: ActivatedRoute,
              private livroService: LivroService,
              private router: Router) {


  }
  ngOnInit() {
  }
  adicionarLivro(){
    this.livroService.adicionarLivro(this.adicionarLivroRequest)
      .subscribe({
        next: () => {
          this.router.navigate(["employees"])
        }
      })
  }

}

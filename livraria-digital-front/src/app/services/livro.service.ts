import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import {Observable} from "rxjs";
import {Livro} from "../models/livro.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseApiUrl}api/livros`);
  }

  adicionarLivro(adicionarLivroRequest: Livro): Observable<Livro>{
    adicionarLivroRequest.id= "00000000-0000-0000-0000-000000000000"
    return this.http.post<Livro>(
      `${this.baseApiUrl}api/livros`,
      adicionarLivroRequest
    );
  }
}

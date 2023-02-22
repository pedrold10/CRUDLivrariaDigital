import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseApiUrl}api/livro`);
  }
  

  adicionarLivro(adicionarLivroRequest: Livro): Observable<Livro>{
    adicionarLivroRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Livro>(`${this.baseApiUrl}api/livro`, adicionarLivroRequest);

  }
}

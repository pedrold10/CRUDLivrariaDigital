import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarLivroComponent } from './components/adicionar-livro/adicionar-livro.component';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarLivroComponent,
    ListarLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

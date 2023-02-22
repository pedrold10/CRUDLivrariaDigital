import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarLivroComponent } from './components/adicionar-livro/adicionar-livro.component';
import { EditarLivroComponent } from './components/editar-livro/editar-livro.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';

const routes: Routes = [
  {
    path: "livros",
    component: ListaLivrosComponent
  },
  {
    path: "adicionar",
    component: AdicionarLivroComponent
  },
  {
    path: "editar/:id",
    component: EditarLivroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

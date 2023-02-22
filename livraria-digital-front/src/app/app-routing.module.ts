import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';

const routes: Routes = [
  {
    path: "livros",
    component: ListaLivrosComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarLivrosComponent} from "./components/listar-livros/listar-livros.component";

const routes: Routes = [
  {
    path: "livros",
    component: ListarLivrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

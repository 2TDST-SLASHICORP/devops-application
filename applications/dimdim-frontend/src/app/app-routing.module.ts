import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgenciaListComponent } from "./components/agencia-list/agencia-list.component";
import { AgenciaEnderecoComponent } from "./components/agencia-endereco/agencia-endereco.component";
import { AddAgenciaComponent } from "./components/add-agencia/add-agencia.component";

const routes: Routes = [
  { path: '', redirectTo: 'agencias', pathMatch: 'full' },
  { path: 'agencias', component: AgenciaListComponent },
  { path: 'agencias/:id', component: AgenciaEnderecoComponent },
  { path: 'add', component: AddAgenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

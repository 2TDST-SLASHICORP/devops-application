import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAgenciaComponent } from './components/add-agencia/add-agencia.component';
import { AgenciaEnderecoComponent } from './components/agencia-endereco/agencia-endereco.component';
import { AgenciaListComponent } from './components/agencia-list/agencia-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAgenciaComponent,
    AgenciaEnderecoComponent,
    AgenciaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

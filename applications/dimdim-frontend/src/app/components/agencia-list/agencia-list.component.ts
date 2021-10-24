import { Component, OnInit } from '@angular/core';
import { Agencia } from "../../models/agencia.model";
import { AgenciaService } from "../../services/agencia.service";

@Component({
  selector: 'app-agencia-list',
  templateUrl: './agencia-list.component.html',
  styleUrls: ['./agencia-list.component.css']
})
export class AgenciaListComponent implements OnInit {
  agencias?: Agencia[];
  currentAgencia?: Agencia;
  currentIndex = -1;
  nome = '';

  constructor(private agenciaService: AgenciaService) { }

  ngOnInit(): void {
    this.retrieveAgencias();
  }

  retrieveAgencias(): void {
    this.agenciaService.getAll()
      .subscribe(
        data => {
          this.agencias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveAgencias();
    this.currentAgencia = undefined;
    this.currentIndex = -1;
  }

  setActiveAgencia(agencia: Agencia, index: number): void {
    this.currentAgencia = agencia;
    this.currentIndex = index;
  }

  removeAllAgencias(): void {
    this.agenciaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.agenciaService.findByNome(this.nome)
      .subscribe(
        data => {
          this.agencias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { AgenciaService } from "../../services/agencia.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Agencia } from "../../models/agencia.model";

@Component({
  selector: 'app-agencia-endereco',
  templateUrl: './agencia-endereco.component.html',
  styleUrls: ['./agencia-endereco.component.css']
})
export class AgenciaEnderecoComponent implements OnInit {
  currentAgencia: Agencia = {
    nome: '',
    endereco: '',
    published: false
  };
  message = '';

  constructor(
    private agenciaService: AgenciaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAgencia(this.route.snapshot.params.id);
  }

  getAgencia(id: string): void {
    this.agenciaService.get(id)
      .subscribe(
        data => {
          this.currentAgencia = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      nome: this.currentAgencia.nome,
      endereco: this.currentAgencia.endereco,
      published: status
    };

    this.agenciaService.update(this.currentAgencia.id, data)
      .subscribe(
        response => {
          this.currentAgencia.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateAgencia(): void {
    this.agenciaService.update(this.currentAgencia.id, this.currentAgencia)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteAgencia(): void {
    this.agenciaService.delete(this.currentAgencia.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/agencias']);
        },
        error => {
          console.log(error);
        });
  }
}

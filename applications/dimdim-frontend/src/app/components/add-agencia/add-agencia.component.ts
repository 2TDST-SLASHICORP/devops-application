import { Component, OnInit } from '@angular/core';
import { Agencia } from "../../models/agencia.model";
import { AgenciaService } from "../../services/agencia.service";

@Component({
  selector: 'app-add-agencia',
  templateUrl: './add-agencia.component.html',
  styleUrls: ['./add-agencia.component.css']
})
export class AddAgenciaComponent implements OnInit {
  agencia: Agencia = {
    nome: '',
    endereco: '',
    published: false
  };
  submitted = false;

  constructor(private agenciaService: AgenciaService) { }

  ngOnInit(): void {
  }

  saveAgencia(): void {
    const data = {
      nome: this.agencia.nome,
      endereco: this.agencia.endereco
    };

    this.agenciaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAgencia(): void {
    this.submitted = false;
    this.agencia = {
      nome: '',
      endereco: '',
      published: false
    };
  }

}

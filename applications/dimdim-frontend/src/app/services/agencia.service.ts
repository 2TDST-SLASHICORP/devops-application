import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Agencia } from '../models/agencia.model';

const baseUrl = 'http://localhost:8080/api/agencias';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Agencia[]> {
    return this.http.get<Agencia[]>(baseUrl);
  }

  get(id: any): Observable<Agencia> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(nome: any): Observable<Agencia[]> {
    return this.http.get<Agencia[]>(`${baseUrl}?name=${nome}`);
  }
}

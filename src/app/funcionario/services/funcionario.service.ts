import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Funcionario } from '../../shared/models/funcionario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  BASE_URL = "http://localhost:3000/funcionarios/";
  
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listarFuncionarios(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(this.BASE_URL + id,
      this.httpOptions);
  }

  inserirFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(this.BASE_URL,
      JSON.stringify(funcionario),
      this.httpOptions);
  }

  removerFuncionario(id: number): Observable<Funcionario> {
    return this.httpClient.delete<Funcionario>(this.BASE_URL + id,
      this.httpOptions);
  }

  alterar(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(this.BASE_URL + funcionario.id,
      JSON.stringify(funcionario),
      this.httpOptions);
  }
}



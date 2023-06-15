import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  // httpOptions<T>(BASE_URL: string, httpOptions: any): Observable<Funcionario[]> {
  //   throw new Error('Method not implemented.');
  // }

  // inserirFuncionario(funcionario: Funcionario): void {
  //   const funcionarios = this.listarFuncionarios();
  //   funcionario.id = new Date().getTime();

  //   funcionarios.push(funcionario);

  //   localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  // }

  // // busca por id
  // buscarFuncionario(id: number): Funcionario | undefined {
  //   const funcionarios: Funcionario[] = this.listarFuncionarios();

  //   return funcionarios.find(funcionario => funcionario.id === id);
  // }

  // atualizarFuncionario(funcionario: Funcionario): void {
  //   const funcionarios: Funcionario[] = this.listarFuncionarios();

  //   funcionarios.forEach((obj, index, objs) => {
  //     if (funcionario.id === obj.id) {
  //       objs[index] = funcionario
  //     }
  //   });

  //   localStorage[LS_CHAVE] = JSON.stringify(funcionarios)
  // }

  // removerFuncionario(id: number): void {
  //   let funcionarios: Funcionario[] = this.listarFuncionarios();

  //   funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);

  //   localStorage[LS_CHAVE] = JSON.stringify(funcionarios)
  // }
}



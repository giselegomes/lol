import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from '../../shared/models/cliente.model';
import { Observable } from 'rxjs';

// const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  BASE_URL = "http://localhost:3000/clientes";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL, this.httpOptions);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL,
      JSON.stringify(cliente),
      this.httpOptions)
  }

  buscarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.BASE_URL + id,
      this.httpOptions);
  }
}

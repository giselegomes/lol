import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedido } from './../../shared/models/pedido.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  BASE_URL = "http://localhost:3000/pedidos/"

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listarPedidos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.BASE_URL,
    this.httpOptions);
  }

  inserirPedido(pedido: Pedido): Observable<Pedido> {
    pedido.id = new Date().getTime();
    return this.httpClient.post<Pedido>(this.BASE_URL,
    JSON.stringify(pedido),
    this.httpOptions);
    }

    atualizarPedido(pedido: Pedido): Observable<Pedido> {
      const url = `${this.BASE_URL}${pedido.id}`;
      return this.httpClient.put<Pedido>(url, JSON.stringify(pedido), this.httpOptions);
    }
    buscarPorId(id: number): Observable<Pedido> {
      return this.httpClient.get<Pedido>(this.BASE_URL + id,
        this.httpOptions);
    }
    
}

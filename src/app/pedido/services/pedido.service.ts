import { Injectable } from '@angular/core';

import { Pedido } from './../../shared/models/pedido.model'

const LS_CHAVE: string = "pedidos"

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor() { }

  listarPedidos(): Pedido[] {
    const pedidos = localStorage[LS_CHAVE];
    return pedidos ? JSON.parse(pedidos) : [];
  }

  inserirPedido(pedido: Pedido): void {
    const pedidos = this.listarPedidos();
    pedido.id = new Date().getTime();

    pedidos.push(pedido)

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }
}

import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../../../pedido/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';
@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})

export class InicialClienteComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidos = [];
    this.listarPedidos();
  }

  listarPedidos(): void {
    this.pedidoService.listarPedidos().subscribe({
      next: (data: Pedido[]) => {
        if (data == null) {
          this.pedidos = [];
        } else {
          this.pedidos = data.map(pedido => ({
            ...pedido,
            dataPedido: new Date(pedido.dataPedido)
          }));
        }
      },
      error: (error) => {
        // Lógica de tratamento de erro
      }
    });
  }
}



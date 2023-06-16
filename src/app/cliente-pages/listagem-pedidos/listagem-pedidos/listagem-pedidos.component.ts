import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../../../pedido/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';
@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})

export class ListagemPedidosComponent implements OnInit {

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

  selectedStatus: string = ''; // Variável para armazenar o valor selecionado no seletor

  //Método para aplicar o filtro de status do pedido
  applyStatusFilter() {
    if (this.selectedStatus === '') {
      // Se nenhum status for selecionado, mostra todos os pedidos em ordem decrescente
      return this.pedidos.sort((a, b) => b.dataPedido.getTime() - a.dataPedido.getTime());
    } else {
      // Filtra a lista de pedidos pelo status selecionado
      return this.pedidos.filter(pedido => pedido.status === this.selectedStatus);
    }
  }

  cancelarPedido(id: number) {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.status = 'Cancelado';
    }
  }
}


  // listarPedidos(): Pedido[] {
  //   // return this.pedidoService.listarPedidos();
  //   return [
  //     new Pedido(1, [], new Date(1993, 1, 28), "Cancelado"),
  //     new Pedido(2, [], new Date(2013, 1, 29), "Aguardando agamento"),
  //     new Pedido(3, [], new Date(2023, 1, 28), "Em aberto"),
  //     new Pedido(4, [], new Date(2003, 1, 21), "Cancelado")
  //   ];
  // }
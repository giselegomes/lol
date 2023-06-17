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
  selectedStatus: string = '';

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos(): void {
    this.pedidoService.listarPedidos().subscribe((data: Pedido[]) => {
      if (data == null) {
        this.pedidos = [];
      } else {
        this.pedidos = data.map((pedido) => ({
          ...pedido,
          dataPedido: new Date(pedido.dataPedido),
        }));
      }
    });
  }

  applyStatusFilter() {
    if (this.selectedStatus === '') {
      return this.pedidos.sort(
        (a, b) => b.dataPedido.getTime() - a.dataPedido.getTime()
      );
    } else {
      return this.pedidos.filter(
        (pedido) => pedido.status === this.selectedStatus
      );
    }
  }

  cancelarPedido(id: number) {
    const pedido = this.pedidos.find((p) => p.id === id);
    if (pedido) {
      pedido.status = 'Cancelado';
      this.pedidoService.atualizarPedido(pedido).subscribe(
        (response: Pedido) => {
          console.log('Pedido atualizado:', response);
          // Realize outras ações necessárias
        },
        (error) => {
          console.error('Erro ao atualizar pedido:', error);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../../../pedido/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

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


  pagarPedido(id: number) {
    const pedido = this.pedidos.find((p) => p.id === id);
    if (pedido) {
      pedido.status = 'Pago';
      this.pedidoService.atualizarPedido(pedido).subscribe(
        (response: Pedido) => {
          console.log('Pagamento realizado:', response);
          // Realize outras ações necessárias
          alert("Pagamento realizado")
        },
        (error) => {
          console.error('Erro ao pagar pedido:', error);
        }
      );
    } '1111'
  }
}

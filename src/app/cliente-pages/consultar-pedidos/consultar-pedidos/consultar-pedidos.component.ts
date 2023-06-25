import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})
export class ConsultarPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pesquisarPedido();
  }

  pesquisa: number;
  pedidoEncontrado: Pedido | undefined;
  pedidoNaoEncontrado: boolean = false;

  pesquisarPedido(): void {
    this.pedidoService.buscarPorId(this.pesquisa).subscribe({
      next: (pedido: Pedido | null) => {
        if (pedido === null) {
          this.pedidos = [];
          this.pedidoEncontrado = undefined;
          this.pedidoNaoEncontrado = true;
        } else {
          this.pedidos = [pedido];
          this.pedidoEncontrado = pedido;
          this.pedidoNaoEncontrado = false;
        }
      },
      error: (error) => {
        console.error('Erro ao buscar o pedido:', error);
        this.pedidos = [];
        this.pedidoEncontrado = undefined;
        this.pedidoNaoEncontrado = true;
      }
    });
  }
}

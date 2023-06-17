import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../pedido/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';

@Component({
  selector: 'app-inicial-funcionario',
  templateUrl: './inicial-funcionario.component.html',
  styleUrls: ['./inicial-funcionario.component.css']
})


export class InicialFuncionarioComponent implements OnInit {
    pedidos: Pedido[] = [];

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

 // pedidos em ordem crescente
  // get pedidosSorted() {
  //   return this.pedidos.sort((a, b) => a.dataHora.getTime() - b.dataHora.getTime());
  // }

  recolher: boolean = false;

  pedidoSelecionado: any;
  numeroPedido: number;

  abrirModalRecolhimento(id: number) {
    // abre a modal 
    this.recolher = true;
    // pega o pedido selecionado
    this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
    // para printar o número do pedido na modal
    this.numeroPedido = id;
  }

  confirmarRecolhimento(id: number) {
    const pedido = this.pedidos.find((p) => p.id === id);
    if (pedido) {
      pedido.status = 'Confirmado';
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

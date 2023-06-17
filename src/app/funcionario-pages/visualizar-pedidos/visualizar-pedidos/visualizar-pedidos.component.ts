import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../pedido/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';

@Component({
  selector: 'app-visualizar-pedidos',
  templateUrl: './visualizar-pedidos.component.html',
  styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  selectedStatus: string = ''; // Variável para armazenar o valor selecionado no seletor

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

  // Método para aplicar o filtro de status do pedido
  applyStatusFilter() {
    if (this.selectedStatus === '') {
      // Se nenhum status for selecionado, mostra todos os pedidos ordenados por data/hora
      // return this.pedidos.sort((a, b) => a.dataHora.getTime() - b.dataHora.getTime());
      return this.pedidos;
    } else {
      // Filtra a lista de pedidos pelo status selecionado
      return this.pedidos.filter(pedido => pedido.status === this.selectedStatus);
    }
  }

  // Modais
  confirmar: boolean = false;
  finalizar: boolean = false;
  recolher: boolean = false;

  pedidoSelecionado: any;
  numeroPedido: number;

  abrirModalConfirmar(id: number) {
    // abre a modal 
    this.confirmar = true;
    // pega o pedido selecionado
    this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
    // para printar o número do pedido na modal
    this.numeroPedido = id;
  }

  confirmarLavagem(id: number) {
    const pedido = this.pedidos.find((p) => p.id === id);
    if (pedido) {
      pedido.status = 'Aguardando pagamento';
      this.pedidoService.atualizarPedido(pedido).subscribe(
        (response: Pedido) => {
          console.log('Pedido atualizado:', response);
          // Realize outras ações necessárias
          alert("Pedido finalizando. Aguardando pagamento")
        },
        (error) => {
          console.error('Erro ao atualizar pedido:', error);
        }
      );
    } '1111'
  }

  // abrirModalFinalizar(id: number) {
  //   // abre a modal 
  //   this.finalizar = true;
  //   // pega o pedido selecionado
  //   this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
  //   // para printar o número do pedido na modal
  //   this.numeroPedido = id;
  // }

  confirmarFinalizacao(id: number) {
    const pedido = this.pedidos.find((p) => p.id === id);
    if (pedido) {
      pedido.status = 'Finalizado';
      this.pedidoService.atualizarPedido(pedido).subscribe(
        (response: Pedido) => {
          console.log('Pedido atualizado:', response);
          // Realize outras ações necessárias
          alert("Finalizado.")
        },
        (error) => {
          console.error('Erro ao atualizar pedido:', error);
        }
      );
    } '1111'
  }

  confirmarRecolhimento(id: number) {
    const pedido = this.pedidos.find((p) => p.id === id);
    if (pedido) {
      pedido.status = 'Confirmado';
      this.pedidoService.atualizarPedido(pedido).subscribe(
        (response: Pedido) => {
          console.log('Pedido atualizado:', response);
          // Realize outras ações necessárias
          alert("Pedido recolhido.")
        },
        (error) => {
          console.error('Erro ao atualizar pedido:', error);
        }
      );
    }
  }
}


// abrirModalRecolhimento(id: number) {
//   // abre a modal 
//   this.recolher = true;
//   // pega o pedido selecionado
//   this.pedidoSelecionado = this.pedidos.find(p => p.id === id);
//   // para printar o número do pedido na modal
//   this.numeroPedido = id;
// }
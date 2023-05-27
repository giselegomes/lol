import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-pednumeroPedidoos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})

export class ConsultarPedidosComponent 

{

  
  pedidos = [
    { num_pedido: 111, pecas: ["Camisa", "Calça", "Cinto"], status: "Cancelado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "24,00" },
    { num_pedido: 222, pecas: ["Camisa", "Calça", "Cinto"], status: "Aprovado", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "32,00" },
    { num_pedido: 333, pecas: ["Camisa", "Calça", "Cinto"], status: "Aguardando Pagamento", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" },
    { num_pedido: 444, pecas: ["Camisa", "Calça", "Cinto"], status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "33,00" },
    { num_pedido: 555, pecas: ["Camisa", "Calça", "Cinto"], status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "89,00" },
    { num_pedido: 666, pecas: ["Camisa", "Calça", "Cinto"], status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "67,00" },
    { num_pedido: 777, pecas: ["Camisa", "Calça", "Cinto"], status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "100,00" },
    { num_pedido: 888, pecas: ["Camisa", "Calça", "Cinto"], status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "92,00" },
    { num_pedido: 999, pecas: ["Camisa", "Calça", "Cinto"], status: "Em aberto", dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00" }
  ]

  pesquisa: number;
  pedidoEncontrado: any;
  pedidoNaoEncontrado: boolean = false;

  pesquisarPedido() {
    this.pedidoNaoEncontrado = false; // redefine para false
    this.pedidoEncontrado = this.pedidos.find(pedido => pedido.num_pedido === Number(this.pesquisa));
    if (!this.pedidoEncontrado) {
      this.pedidoNaoEncontrado = true;
    }
  }
}








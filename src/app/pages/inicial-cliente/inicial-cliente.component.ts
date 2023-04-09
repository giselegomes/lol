import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent {

  pedidos = [
    { num_pedido: '1', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '2', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '3', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '4', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '5', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '6', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '7', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '8', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"},
    { num_pedido: '9', dt_recolhimento: "10/12/2022", dt_devolucao: '12/12/2022', valor: "22,00"}

  ];
}


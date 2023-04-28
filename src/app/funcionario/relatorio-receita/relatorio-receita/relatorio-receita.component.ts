import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorio-receita',
  templateUrl: './relatorio-receita.component.html',
  styleUrls: ['./relatorio-receita.component.css']
})
export class RelatorioReceitaComponent {

  pedidos = [
    { id: 1, descricao: 'Pedido 1', dataTeste: new Date('2022-04-15'), dataCriacao: new Date('2022-04-15') },
    { id: 2, descricao: 'Pedido 2', dataTeste: new Date('2022-04-15'), dataCriacao: new Date('2022-04-20') },
    { id: 3, descricao: 'Pedido 3', dataTeste: new Date('2022-04-15'), dataCriacao: new Date('2021-04-25') },
    { id: 4, descricao: 'Pedido 4', dataTeste: new Date('2023-04-30'), dataCriacao: new Date('2023-04-30') }
  ];

  startDate: Date
  endDate: Date


  filtrar() {
    // verifica se o filtro de datas faz sentido
    if (this.startDate > this.endDate) {
      alert("Período inválido");
      return;
    }
  
    console.log("data inicial selecionada", this.startDate);
    console.log("data final selecionada", this.endDate);

    const dataInicial = new Date(this.startDate);


    const dataFinal = new Date(this.endDate);

    const teste = this.pedidos.filter(pedido => {
      // não é possível ver se uma string é maior que a outra
      // as duas precisam ser do tipo date
      console.log(pedido.dataCriacao >= dataInicial && pedido.dataCriacao <= dataFinal);
      
    //  return pedido.dataCriacao >= dataInicial && pedido.dataCriacao <= dataFinal;
        
    });
  }

  
}


  // pedidos = [
  //   { numPedido: 1111, valorTotal: 22.30, status: "Finalizado", dataPagamento: '2022-01-01' },
  //   { numPedido: 2222, valorTotal: 22.30, status: "Finalizado", dataPagamento: '2022-02-01' },
  //   { numPedido: 3333, valorTotal: 22.30, status: "Finalizado", dataPagamento: '2022-03-01' },
  //   { numPedido: 4443, valorTotal: 22.30, status: "Finalizado", dataPagamento: '2022-04-01' }
  // ]
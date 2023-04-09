import { Component } from '@angular/core';

// classe que representa as peças de roupa
export class itemRoupa {
  nome: string;
  valor: number;
  prazo: string ;
}

@Component({
  selector: 'app-pedido-online',
  templateUrl: './pedido-online.component.html',
  styleUrls: ['./pedido-online.component.css']
})

export class PedidoOnlineComponent {

  // prazo = quantidade de dias
  itens: itemRoupa[] = [
    { nome: "Blusa", valor: 5.50, prazo: "1" },
    { nome: "Calça", valor: 7.00, prazo: "1" },
    { nome: "Calcinha", valor: 2.00, prazo: "1" },
    { nome: "Camisa", valor: 7.00, prazo: "1" },
    { nome: "Camiseta", valor: 3.00, prazo: "1" },
    { nome: "Casaco", valor: 10.00, prazo: "2" },
    { nome: "Cueca", valor: 2.00, prazo: "1" },
    { nome: "Gravata", valor: 1.00, prazo: "1" },
    { nome: "Jaqueta", valor: 10.00, prazo: "2" },
    { nome: "Meia", valor: 1.00, prazo: "1" },
    { nome: "Moletom", valor: 9.50, prazo: "2" },
    { nome: "Pijama", valor: 12.00, prazo: "1" },
    { nome: "Regata", valor: 3.00, prazo: "2" },
    { nome: "Roupa de Banho", valor: 6.00, prazo: "1" },
    { nome: "Saia", valor: 5.00, prazo: "1" },
    { nome: "Shorts", valor: 5.00, prazo: "1" },
    { nome: "Suéter", valor: 12.00, prazo: "3" },
    { nome: "Terno", valor: 25.00, prazo: "3" },
    { nome: "Vestido", valor: 10.00, prazo: "2" }
  ];

  // ele não puxa os valores do array
  
  itemSelecionado: itemRoupa;
  quantidade: number = 1;
  itensCarrinho: { item: itemRoupa, quantidade: number }[] = [];
  totalCarrinho: number = 0;
  

  adicionarItem() {
    const itemCarrinho = { item: this.itemSelecionado, quantidade: this.quantidade };
    this.itensCarrinho.push(itemCarrinho);
    this.totalCarrinho += itemCarrinho.item.valor * itemCarrinho.quantidade;
    this.itemSelecionado = null;
    this.quantidade = 1;
    console.log("itemSelecionado", this.itemSelecionado.toString());
    
  }

  removerItem(index: number) {
    const itemCarrinho = this.itensCarrinho[index];
    this.totalCarrinho -= itemCarrinho.item.valor * itemCarrinho.quantidade;
    this.itensCarrinho.splice(index, 1);
  }

  limparCarrinho() {
    this.itensCarrinho = [];
    this.totalCarrinho = 0;
  }
}
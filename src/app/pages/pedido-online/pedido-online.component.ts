import { Component } from '@angular/core';

// classe que representa as peças de roupa
export class itemRoupa {
  nome: string;
  valor: number;
  prazo: string;
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

  // Item selecionado pelo usuário
  itemSelecionado: itemRoupa;

  // Quantidade de itens a serem adicionados ao carrinho
  quantidade: number = 1;

  // Lista de itens adicionados ao carrinho
  itensCarrinho: { item: itemRoupa, quantidade: number }[] = [];

  // Total de itens no carrinho
  totalCarrinho: number = 0;

  constructor() { }

  // Função para adicionar um item ao carrinho
  adicionarItemCarrinho() {
    let itemCarrinho = { item: this.itemSelecionado, quantidade: this.quantidade };
    this.itensCarrinho.push(itemCarrinho);
    this.totalCarrinho += this.itemSelecionado.valor * this.quantidade;
  }

  // Função para remover um item do carrinho
  removerItemCarrinho(index: number) {
    let itemRemovido = this.itensCarrinho[index];
    this.itensCarrinho.splice(index, 1);
    this.totalCarrinho -= itemRemovido.item.valor * itemRemovido.quantidade;
  }
}
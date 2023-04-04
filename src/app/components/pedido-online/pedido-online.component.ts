import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido-online',
  templateUrl: './pedido-online.component.html',
  styleUrls: ['./pedido-online.component.css']
})

export class PedidoOnlineComponent {

  conteudo: string;

  onSelect(opcao: string) {
    if (opcao === 'opcao1') {
      this.conteudo = 'Conteúdo da opção 1';
    } else if (opcao === 'opcao2') {
      this.conteudo = 'Conteúdo da opção 2';
    } else if (opcao === 'opcao3') {
      this.conteudo = 'Conteúdo da opção 3';
    }
  }

}


import { Component, OnInit } from '@angular/core';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Roupa } from 'src/app/shared/models/roupa.model';

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
export class PedidoOnlineComponent implements OnInit {
  roupas: Roupa[] = [];
  itemSelecionado: itemRoupa;
  quantidade: number = 1;
  itensPedido: { item: itemRoupa, quantidade: number }[] = [];
  totalPedido: number = 0;
  aceitar: boolean = false;
  recusar: boolean = false;

  constructor(private roupaService: RoupaService) { }

  ngOnInit() {
    this.listarRoupas();
  }

  listarRoupas() {
    this.roupaService.listarRoupas().subscribe(
      (data: Roupa[]) => {
        if (data == null) {
          this.roupas = [];
        } else {
          this.roupas = data;
        }
      }
    );
  }

  adicionarItemPedido() {
    if (!this.itemSelecionado) {
      alert("Por favor, selecione uma peça de roupa");
      return;
    }

    if (this.quantidade === 0) {
      alert("Por favor, insira a quantidade de peças");
      return;
    }

    let itemPedido = { item: this.itemSelecionado, quantidade: this.quantidade };
    this.itensPedido.push(itemPedido);
    this.totalPedido += this.itemSelecionado.valor * this.quantidade;
  }

  removerItemPedido(index: number) {
    let itemRemovido = this.itensPedido[index];
    this.itensPedido.splice(index, 1);
    this.totalPedido -= itemRemovido.item.valor * itemRemovido.quantidade;
  }

  fecharModal(event: Event) {
    event.preventDefault();
    this.aceitar = false;
    location.reload();
  }

  fecharModalRecusado(event: Event) {
    event.preventDefault();
    this.recusar = false;
    location.reload();
  }
}

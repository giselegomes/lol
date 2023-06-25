import { Component, OnInit } from '@angular/core';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { PedidoService } from 'src/app/pedido/services/pedido.service';
import { Pedido, Peca, ItemRoupa } from 'src/app/shared/models/pedido.model';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido-online',
  templateUrl: './pedido-online.component.html',
  styleUrls: ['./pedido-online.component.css']
})
export class PedidoOnlineComponent implements OnInit {
  roupas: Roupa[] = [];
  itemSelecionado: ItemRoupa;
  quantidade: number = 1;
  itensPedido: { item: ItemRoupa, quantidade: number }[] = [];
  totalPedido: number = 0;
  aceitar: boolean = false;
  recusar: boolean = false;

  constructor(
    private roupaService: RoupaService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarRoupas();
  }

  listarRoupas() {
    this.roupaService.listarRoupas().subscribe(
      (data: Roupa[]) => {
        if (data === null) {
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

  aceitarPedido() {
    if (this.itensPedido.length === 0) {
      alert("Por favor, adicione itens ao pedido");
      return;
    }

    const pecas: Peca[] = this.itensPedido.map(item => {
      const peca: Peca = {
        nome: item.item.nome,
        valor: item.item.valor,
        prazo: item.item.prazo,
        quantidade: item.quantidade
      };
      return peca;
    });

    const pedido: Pedido = {
      id: 0,
      dataPedido: new Date(),
      status: 'Em aberto',
      pecas: pecas,
      valorTotal: this.totalPedido
    };

    this.pedidoService.inserirPedido(pedido).subscribe(
      (response: any) => {
        console.log('Pedido salvo no json-server:', response);
        alert("Pedido realizado!");
        this.router.navigate(['/cliente']); // Redireciona para a rota '/cliente'
      },
      (error: any) => {
        console.error('Erro ao salvar o pedido:', error);
        alert("Erro ao realizar o pedido. Por favor, tente novamente.");
      }
    );
  }
}

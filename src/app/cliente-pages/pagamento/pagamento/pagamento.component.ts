import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../pedido/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pedidoId: string;
  pedido: Pedido;
 

  constructor(private route: ActivatedRoute, 
    private pedidoService: PedidoService, 
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pedidoId = params['id'];
      this.buscarPedido(this.pedidoId).subscribe(
        (pedido: Pedido) => {
          this.pedido = pedido;
        },
        (error) => {
          console.error('Erro ao buscar pedido:', error);
        }
      );
    });
  }

  buscarPedido(id: string): Observable<Pedido> {
    const idNumero = parseInt(id); // Converte o ID para número

    return this.pedidoService.buscarPorId(idNumero);
  }

  pagarPedido(id: number) {
    this.buscarPedido(id.toString()).subscribe(
      (pedido: Pedido) => {
        pedido.status = 'Pago';
        this.pedidoService.atualizarPedido(pedido).subscribe(
          (response: Pedido) => {
            console.log('Pagamento realizado:', response);
            // Realize outras ações necessárias
            alert("Pedido realizado!");
            this.router.navigate(['/cliente']); // Redireciona para a rota '/cliente'
          },
          (error) => {
            console.error('Erro ao pagar pedido:', error);
          }
        );
      },
      (error) => {
        console.error('Erro ao buscar pedido:', error);
      }
    );
  }
}

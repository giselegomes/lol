import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/shared/models/roupa.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //seta os cadastros iniciais de roupa, cliente e funcionario
  //ao carregar a página inicial de login
  ngOnInit(): void {
    this.criaListaRoupa2();
  }

  criaListaRoupa2(): void {

    let listaRoupas: Roupa[] = [
      { id: 1, nome: "Blusa", valor: 5.50, prazo: 1 },
      { id: 2, nome: "Calça", valor: 7.00, prazo: 1 },
      { id: 3, nome: "Calcinha", valor: 2.00, prazo: 1 },
      { id: 4, nome: "Camisa", valor: 7.00, prazo: 1 },
      { id: 5, nome: "Camiseta", valor: 3.00, prazo: 1 },
      { id: 6, nome: "Casaco", valor: 10.00, prazo: 2 },
      { id: 7, nome: "Cueca", valor: 2.00, prazo: 1 },
      { id: 8, nome: "Gravata", valor: 1.00, prazo: 1 },
      { id: 9, nome: "Jaqueta", valor: 10.00, prazo: 2 },
      { id: 10, nome: "Meia", valor: 1.00, prazo: 1 },
      { id: 11, nome: "Moletom", valor: 9.50, prazo: 2 },
      { id: 12, nome: "Pijama", valor: 12.00, prazo: 1 },
      { id: 13, nome: "Regata", valor: 3.00, prazo: 2 },
      { id: 14, nome: "Roupa de Banho", valor: 6.00, prazo: 1 },
      { id: 15, nome: "Saia", valor: 5.00, prazo: 1 },
      { id: 16, nome: "Shorts", valor: 5.00, prazo: 1 },
      { id: 17, nome: "Suéter", valor: 12.00, prazo: 3 },
      { id: 18, nome: "Terno", valor: 25.00, prazo: 3 },
      { id: 19, nome: "Vestido", valor: 10.00, prazo: 2 }
    ]
    localStorage.setItem("chave_roupas", JSON.stringify(listaRoupas));
  }
}

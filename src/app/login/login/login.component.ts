import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { Cliente } from 'src/app/shared/models/cliente.model';

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
    this.criaListaFuncionario();
    this.criaListaCliente();
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

  criaListaFuncionario(): void {

    let listaFuncionarios: Funcionario[] = [
      { id: 1, nome: "admin", email: "admin@admin.com", dt_nasc: new Date (1999, 11 ,12), senha: "admin" },
      { id: 2, nome: "Maria", email: "maria@lol.com", dt_nasc: new Date (1989, 1 ,30), senha: "maria" },
      { id: 3, nome: "Mário", email: "mario@lol.com", dt_nasc: new Date (1992, 10,28), senha: "mario" },
    ]
    localStorage.setItem("chave_funcionarios", JSON.stringify(listaFuncionarios));

  }

  criaListaCliente(): void{

    let listaCliente: Cliente[] = [
      { id:1, nome: 'João', cpf: 11111111111, email: "teste@gmail.com", cep: 78507120, uf: 'Minas Gerais', cidade: 'Sabará', endereco: 'Duque de Caxias', numero: 9437, telefone:999979999 },
      { id:2, nome: 'José', cpf: 22222222222, email: "teste@gmail.com", cep: 71014676, uf: 'Paraíba', cidade: 'João P.', endereco: 'Castro Alves', numero: 6788, telefone: 999959999 },
      { id:3, nome: 'Joana', cpf: 33333333333,  email: "teste@gmail.com", cep: 63762156, uf: 'Distrito Federal', cidade: 'Brasília', endereco: 'Goiás', numero: 1268, telefone: 999959999 },
      { id:4, nome: 'Joaquina', cpf: 44444444444,  email: "teste@gmail.com", cep: 83790180, uf: 'Parana', cidade: 'Curitiba', endereco: 'Fernando de Noronha', numero: 1314, telefone:99999999 }
    ]
    localStorage.setItem("chave_clientes", JSON.stringify(listaCliente));

  }


}

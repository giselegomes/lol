import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-relatorio-melhores-clientes',
  templateUrl: './relatorio-melhores-clientes.component.html',
  styleUrls: ['./relatorio-melhores-clientes.component.css']
})
export class RelatorioMelhoresClientesComponent {

  clientes = [
    { nome: 'João', CPF: 25123333, email: "teste@gmail.com", CEP: 78507120, uf: 'Minas Gerais', cidade: 'Sabará', endereco: 'Duque de Caxias', n: 9437, telefone: "9999 9999" },
    { nome: 'Maria', CPF: 30444556, email: "teste@gmail.com", CEP: 71014676, uf: 'Paraíba', cidade: 'João P.', endereco: 'Castro Alves', n: 6788, telefone: "9999 9999" },
    { nome: 'Pedro', CPF: 40222222,  email: "teste@gmail.com", CEP: 63762156, uf: 'Distrito Federal', cidade: 'Brasília', endereco: 'Goiás', n: 1268, telefone: "9999 9999" }
  ];

  gerarPDF() {
    const doc = new jsPDF();
    const head = [['Nome', 'CPF', 'E-mail', 'CEP', 'Endereco', 'Nº', 'Cidade', 'UF', 'Telefone']]

    doc.setFontSize(18);
    doc.text('Relatório de melhores clientes', 10, 10);

    const rows =
    this.clientes.map(cliente => [
      cliente.nome, cliente.CPF, cliente.email, cliente.CEP, cliente.endereco, cliente.n, cliente.cidade, cliente.uf, cliente.telefone])
    
    autoTable(doc, {
      head: head,
      body: rows
    })

    doc.save('relatorio-melhores-clientes.pdf');
  }

}
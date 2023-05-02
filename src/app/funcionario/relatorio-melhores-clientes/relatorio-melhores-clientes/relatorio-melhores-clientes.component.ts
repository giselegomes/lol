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
    { nome: 'João', idade: 25, CEP: 78507120, estado: 'Minas Gerais', cidade: 'Sabará', rua: 'Duque de Caxias', numero: 9437, quantidade: 100, receita: 60000 },
    { nome: 'Maria', idade: 30, CEP: 71014676, estado: 'Paraíba', cidade: 'João P.', rua: 'Castro Alves', numero: 6788, quantidade: 300, receita: 35000 },
    { nome: 'Pedro', idade: 40,  CEP: 63762156, estado: 'Distrito Federal', cidade: 'Brasília', rua: 'Goiás', numero: 1268, quantidade: 120, receita: 40000 }
  ];

  gerarPDF() {
    const doc = new jsPDF();
    doc.text('Relatório de Clientes', 10, 10);
    doc.text('Nome', 10, 20);
    doc.text('Idade', 35, 20);
    doc.text('CEP', 50, 20);
    doc.text('Estado', 80, 20);
    doc.text('Cidade', 120, 20);
    doc.text('Numero', 140, 20);
    doc.text('Quantidade', 160, 20);
    doc.text('Receita', 190, 20);

    let linha = 30;
    this.clientes.forEach(cliente => {
      doc.text(cliente.nome, 10, linha);
      doc.text(cliente.idade.toString(), 35, linha);
      doc.text(cliente.CEP.toString(), 50, linha);
      doc.text(cliente.estado.toString(), 80, linha);
      doc.text(cliente.cidade.toString(), 120, linha);
      doc.text(cliente.numero.toString(), 140, linha);
      doc.text(cliente.quantidade.toString(), 160, linha);
      doc.text(cliente.receita.toString(), 190, linha);
      linha += 10;
    });

    doc.save('relatorio-clientes.pdf');
  }
}

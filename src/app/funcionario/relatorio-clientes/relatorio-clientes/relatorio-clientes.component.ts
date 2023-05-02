import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})

  export class RelatorioClientesComponent {

    clientes = [
      { nome: 'João', idade: 25, CEP: 78507120, estado: 'Minas Gerais', cidade: 'Sabará', rua: 'Duque de Caxias', numero: 9437 },
      { nome: 'Maria', idade: 30, CEP: 71014676, estado: 'Paraíba', cidade: 'João P.', rua: 'Castro Alves', numero: 6788 },
      { nome: 'Pedro', idade: 40,  CEP: 63762156, estado: 'Distrito Federal', cidade: 'Brasília', rua: 'Goiás', numero: 1268 }
    ];
  
    gerarPDF() {
      const doc = new jsPDF();
      doc.text('Relatório de Clientes', 10, 10);
      doc.text('Nome', 10, 20);
      doc.text('Idade', 40, 20);
      doc.text('CEP', 60, 20);
      doc.text('Estado', 100, 20);
      doc.text('Cidade', 150, 20);
      doc.text('Numero', 180, 20);
  
      let linha = 30;
      this.clientes.forEach(cliente => {
        doc.text(cliente.nome, 10, linha);
        doc.text(cliente.idade.toString(), 40, linha);
        doc.text(cliente.CEP.toString(), 60, linha);
        doc.text(cliente.estado.toString(), 100, linha);
        doc.text(cliente.cidade.toString(), 150, linha);
        doc.text(cliente.numero.toString(), 180, linha);
        linha += 10;
      });
  
      doc.save('relatorio-clientes.pdf');
    }
  
  }
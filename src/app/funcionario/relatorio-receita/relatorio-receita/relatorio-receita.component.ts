import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-relatorio-receita',
  templateUrl: './relatorio-receita.component.html',
  styleUrls: ['./relatorio-receita.component.css']
})
export class RelatorioReceitaComponent implements OnInit {

  pedidos = [
    { numPedido: 1111, valorTotal: 22.30, status: "Finalizado", dataPagamento: new Date('2023-04-29') },
    { numPedido: 2222, valorTotal: 22.30, status: "Finalizado", dataPagamento: new Date('2023-02-01') },
    { numPedido: 3333, valorTotal: 22.30, status: "Finalizado", dataPagamento: new Date('2022-03-01') },
    { numPedido: 4444, valorTotal: 22.30, status: "Finalizado", dataPagamento: new Date('2022-04-01') },
    { numPedido: 5555, valorTotal: 22.30, status: "Finalizado", dataPagamento: new Date('2021-04-01') },
    { numPedido: 6666, valorTotal: 22.30, status: "Finalizado", dataPagamento: new Date('2021-04-01') }
  ];

  startDate: Date
  endDate: Date
  filteredData: any[];
  somaValores: number;

  ngOnInit() {
    // no momento da criação do componente, faz uma cópia de todos os pedidos, exibindo todos na tela antes do filtro ser ativado
    this.filteredData = [...this.pedidos];
    this.somaValores = this.pedidos.reduce((acc, pedido) => acc + pedido.valorTotal, 0);
  }


  filtrar() {
    // verifica se o filtro de datas faz sentido
    if (this.startDate > this.endDate) {
      alert("Período inválido");
      return;
    }

    // transforma as datas do input em um objeto data
    const dataInicial = new Date(this.startDate);
    const dataFinal = new Date(this.endDate);

    let somaValores = 0;
    const filterDate = this.pedidos.filter(pedido => {
      if (pedido.dataPagamento >= dataInicial && pedido.dataPagamento <= dataFinal) {
        somaValores += pedido.valorTotal;
        return true;
      } else {
        return false;
      }
    });

    this.filteredData = filterDate;
    this.somaValores = somaValores;
  }

  gerarPDF() {
    const doc = new jsPDF();
    const head = [['Número do Pedido', 'Data de Pagamento', 'Valor do Pedido']]

    doc.setFontSize(18);
    doc.text('LOL - Lavandeira On-line', 10, 10);
    doc.setFontSize(14);
    doc.text('Relatório de Receita', 10, 20);
    doc.setFontSize(12);
    doc.text(`Período: ${this.startDate ? this.startDate : 'Sem data definida'} - ${this.endDate ? this.endDate : ''}`, 10, 30);

    const rows = this.filteredData.map(pedido => [pedido.numPedido, pedido.dataPagamento.toLocaleDateString(), `R$ ${pedido.valorTotal.toFixed(2)}`]);
    autoTable(doc, {
      head: head,
      body: rows,
      startY: 40,
      didDrawPage: (data) => {
        // Adiciona o rodapé com o total de valores na página
        doc.setFontSize(18);
        doc.text(`Total: R$ ${this.somaValores.toFixed(2)}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
      }
    });

    doc.save('relatorio_receita.pdf');
  }
}





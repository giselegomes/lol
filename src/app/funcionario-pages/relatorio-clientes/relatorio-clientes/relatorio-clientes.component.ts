import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'

import { ClienteService } from '../../../cliente/services/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})

export class RelatorioClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clientes = [];
    this.listarTodos();
  }

  listarTodos(): Cliente[] {
    this.clienteService.listarTodos().subscribe({
      next: (data: Cliente[]) => {
        if (data == null) {
          this.clientes = [];
        }
        else {
          this.clientes = data;
        }
      }
    });
    return this.clientes;
  }

  gerarPDF() {
    const doc = new jsPDF();
    const head = [['Nome', 'CPF', 'E-mail', 'CEP', 'Endereco', 'Nº', 'Cidade', 'UF', 'Telefone']]

    doc.setFontSize(18);
    doc.text('Relatório de Clientes', 10, 10);

    const rows =
      this.clientes.map(cliente => [
        cliente.nome, cliente.cpf, cliente.email, cliente.cep, cliente.endereco, cliente.numero, cliente.cidade, cliente.uf, cliente.telefone])

    autoTable(doc, {
      head: head,
      body: rows
    })

    doc.save('relatorio-clientes.pdf');
  }

}
import { Component, OnInit, ViewChild } from '@angular/core';

import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Roupa } from 'src/app/shared/models/roupa.model';


@Component({
  selector: 'app-manutencao-roupas',
  templateUrl: './manutencao-roupas.component.html',
  styleUrls: ['./manutencao-roupas.component.css']
})

export class ManutencaoRoupasComponent implements OnInit {

  roupas: Roupa[] = [];

  constructor(private roupaService: RoupaService) { }

  ngOnInit(): void {
    this.roupas = [];
    this.listarRoupas();
  }

  listarRoupas(): Roupa[] {
    this.roupaService.listarRoupas().subscribe({
      next: (data: Roupa[]) => {
        if (data == null) {
          this.roupas = [];
        }
        else {
          this.roupas = data;
        }
      }
    });
    return this.roupas;
  }

  removerRoupa($event: any, roupa: Roupa): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover "' +
      roupa.nome + '"?')) {
      this.roupaService.removerRoupa(roupa.id!).
        subscribe({
          complete: () => { this.listarRoupas(); }
        });
    }
  }

}
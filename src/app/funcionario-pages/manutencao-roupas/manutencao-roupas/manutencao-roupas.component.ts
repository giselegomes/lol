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
    this.roupas = this.roupaService.listarRoupas();

  }
  /*
  listarRoupas(): Roupa[] {
    return this.roupaService.listarRoupas();
  }
  */
  removerRoupa($event: any, roupa: Roupa) {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a roupa ${roupa.nome}?`)) {
      this.roupaService.removerRoupa(roupa.id!);
      this.roupas = this.roupaService.listarRoupas();
    }
  }

}
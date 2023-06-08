import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login/login.component';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manutencao-roupas',
  templateUrl: './manutencao-roupas.component.html',
  styleUrls: ['./manutencao-roupas.component.css']
})
export class ManutencaoRoupasComponent implements OnInit {

  roupas: Roupa[] = [];

  constructor(private roupaService: RoupaService) { }

  ngOnInit(): void {
    //this.criaListaRoupa2();
    this.roupas = this.roupaService.listarRoupas();
  }
  //tudo o de baixo ta no RoupaSevice
  
  /*
  listarRoupas(): Roupa[] {
    return this.roupaService.listarRoupas();
  
  }
  */
  /*
  listarRoupas(): Roupa[]{
    const roupas = localStorage["chave_roupas"];
    return roupas ? JSON.parse(roupas) : [] ;
  }
  */
  /*
  removerRoupa($event: any, roupa: Roupa) {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o(a) ${roupa.nome}?`)) {
      this.roupaService.removerRoupa(roupa.id!);
      this.roupas = this.listarRoupas();
    }
  }
  */

  /*
  inserirRoupa(roupa: Roupa): void {

    const roupas = this.listarRoupas();

    roupa.id = new Date().getTime();

    roupas.push(roupa);

    localStorage["chave_teste"] = JSON.stringify(roupas);
  }
  
  /*
  criarListaRoupa(): void{
    this.inserirRoupa(new Roupa (1, "Blusa", 5.5, 1));
    this.inserirRoupa(new Roupa (2, "Calça", 7.00,1));
    this.inserirRoupa(new Roupa (3, "Calcinha", 2, 1));
    this.inserirRoupa(new Roupa (4, "Camisa", 7, 1));
    this.inserirRoupa(new Roupa (5, "Camiseta", 7, 1));
    this.inserirRoupa(new Roupa (6, "Casaco", 10, 2));
    this.inserirRoupa(new Roupa (7, "Cueca", 2, 1));
    this.inserirRoupa(new Roupa (8, "Gravata", 1, 1));
    this.inserirRoupa(new Roupa (9, "Jaqueta", 10, 2));
    this.inserirRoupa(new Roupa (10, "Meia", 1, 1));
    this.inserirRoupa(new Roupa (11, "Moletom", 9.5, 2));
    
  
  }
  */
 /*
  criaListaRoupa2(): void{
  
    let listaRoupas: Roupa[] = [
      { id: 1, nome: "Blusa", valor: 5.50, prazo:1 },
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
  */
}
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// classe que representa as peças de roupa
export class itemRoupa {
  nome: string;
  valor: number;
  prazo: string;

  constructor(n: string, v: number, p: string){
    this.nome = n;
    this.valor = v;
    this.prazo = p;
  }
}

@Component({
  selector: 'app-manutencao-roupas',
  templateUrl: './manutencao-roupas.component.html',
  styleUrls: ['./manutencao-roupas.component.css']
})

export class ManutencaoRoupasComponent {

  // prazo = quantidade de dias
  itens: itemRoupa[] = [
    { nome: "Blusa", valor: 5.50, prazo: "1" },
    { nome: "Calça", valor: 7.00, prazo: "1" },
    { nome: "Calcinha", valor: 2.00, prazo: "1" },
    { nome: "Camisa", valor: 7.00, prazo: "1" },
    { nome: "Camiseta", valor: 3.00, prazo: "1" },
    { nome: "Casaco", valor: 10.00, prazo: "2" },
    { nome: "Cueca", valor: 2.00, prazo: "1" },
    { nome: "Gravata", valor: 1.00, prazo: "1" },
    { nome: "Jaqueta", valor: 10.00, prazo: "2" },
    { nome: "Meia", valor: 1.00, prazo: "1" },
    { nome: "Moletom", valor: 9.50, prazo: "2" },
    { nome: "Pijama", valor: 12.00, prazo: "1" },
    { nome: "Regata", valor: 3.00, prazo: "2" },
    { nome: "Roupa de Banho", valor: 6.00, prazo: "1" },
    { nome: "Saia", valor: 5.00, prazo: "1" },
    { nome: "Shorts", valor: 5.00, prazo: "1" },
    { nome: "Suéter", valor: 12.00, prazo: "3" },
    { nome: "Terno", valor: 25.00, prazo: "3" },
    { nome: "Vestido", valor: 10.00, prazo: "2" }
  ];

  
  // Item selecionado pelo usuário
  itemSelecionado: itemRoupa;

  adicionarItem() {
    
    
    let roupa = new itemRoupa (document.getElementById('novoItemNome').innerHTML, 
                               +document.getElementById('novoItemValor').innerHTML,
                               document.getElementById('novoItemPrazo').innerHTML);
    this.itens.push(roupa);
  }

  //falta fazer 
  removerItem() {

  };


  //falta fazer
  editarItem() {
    //remover readonly
    document.getElementById('prazoEditar').removeAttribute('readonly');
    document.getElementById('valorEditar').removeAttribute('readonly');
    //receber valor novo

    //salvar

  }

  salvarEdicaoItem() {
    let editadoPrazo = document.getElementById('prazoEditar').innerHTML;
    let editadoValor: number = +document.getElementById('valorEditar').innerHTML;


    this.itemSelecionado.prazo = editadoPrazo;
    this.itemSelecionado.valor = editadoValor;



  }

  submit() {
    console.log("enviou formulário");
  }

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      valor: new FormControl('', Validators.required),
      prazo: new FormControl('', Validators.required),

      nome: new FormControl('', Validators.required)
    })
  }

  get nome() {
    return this.momentForm.get('nome')!;
  }

  get valor() {
    return this.momentForm.get('nome')!;
  }

  get prazo() {
    return this.momentForm.get('nome')!;
  }

  public novoItem: boolean = false;
  public alterarItem: boolean = false;



}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent {

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      cpf: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required)
    })
  }

  // valida campos vazios
  get cpf() {
    return this.momentForm.get('cpf')!;
  }

  get nome() {
    return this.momentForm.get('nome')!;
  }

  get email() {
    return this.momentForm.get('email')!;
  }

  get cep() {
    return this.momentForm.get('cep')!;
  }

  get endereco() {
    return this.momentForm.get('endereco')!;
  }

  get numero() {
    return this.momentForm.get('numero')!;
  }

  get cidade() {
    return this.momentForm.get('cidade')!;
  }

  get uf() {
    return this.momentForm.get('uf')!;
  }

  get telefone() {
    return this.momentForm.get('telefone')!;
  }



  submit() {
    console.log("enviou formulário");
  }
}

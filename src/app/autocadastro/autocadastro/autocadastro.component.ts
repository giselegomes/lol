import { Component, OnInit, ViewChild } from '@angular/core';


import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteService } from '../../cliente/services/cliente.service';
import { Cliente } from '../../shared/models/cliente.model';

interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})


export class AutocadastroComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  novoCliente: boolean = true;
  cliente: Cliente = new Cliente();
  id!: string;
  loading!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.momentForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.loading = false;

    this.id = this.route.snapshot.params['id'];
    this.novoCliente = !this.id;

    if (!this.novoCliente) {
      this.clienteService.buscarPorId(+this.id).subscribe(
        cliente => {
          this.cliente = cliente;
          this.cliente.senha = "";
        }
      );
    }
  }

  inserir(): void {
    this.loading = true;
    if (this.formCliente.form.valid) {
      if (this.novoCliente) {
        this.cliente.perfil = 'cliente'; // Definindo o perfil como 'cliente'
        this.clienteService.inserir(this.cliente).subscribe (
          cliente => {
            this.loading = false;
            this.router.navigate(["/"])
          }
        );
      }
    }
  }

  momentForm: FormGroup;


  buscarCEP() {
    const cep = this.momentForm.get('cep').value;

    if (cep && cep.length === 8) {

      this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe((endereco) => {
          console.log(endereco); // exibe o objeto endereco no console
          this.momentForm.patchValue({
            cep: endereco.cep,
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            cidade: endereco.localidade,
            uf: endereco.uf
          });
        });
    }
  }

  submit() {
    console.log(this.momentForm.value);
    alert("Usuário cadastrado com sucesso")
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

  get logradouro() {
    return this.momentForm.get('logradouro')!;
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
}

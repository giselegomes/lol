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
      nome: new FormControl('', Validators.required)
    })
  }

  get cpf() {
    return this.momentForm.get('cpf')!;
  }

  
 



  submit() {
    console.log("enviou formulário");
  }
}


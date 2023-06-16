import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoupaService } from 'src/app/roupa/services/roupa.service';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { NgForm } from '@angular/forms';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-editar-roupa',
  templateUrl: './editar-roupa.component.html',
  styleUrls: ['./editar-roupa.component.css']
})
export class EditarRoupaComponent implements OnInit {
  @ViewChild("formRoupa") formRoupa!: NgForm;
  roupa!: Roupa;
  loading!: boolean;

  constructor(
    private roupaService: RoupaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.route.params.subscribe(params => {
      const id = +params['id']; // Converter o parâmetro 'id' para número
      this.carregarRoupa(id);
    });
  }

  carregarRoupa(id: number): void {
    this.roupaService.buscarPorId(id).subscribe(
      roupa => {
        this.roupa = roupa;
      }
    );
  }

  atualizar(): void {
    if (this.formRoupa.form.valid) {
      this.loading = true;
      this.roupaService.alterar(this.roupa).subscribe(
        roupa => {
          this.loading = false;
          this.router.navigate(['funcionario/manutencao-roupas']);
        }
      );
    }
  }
}


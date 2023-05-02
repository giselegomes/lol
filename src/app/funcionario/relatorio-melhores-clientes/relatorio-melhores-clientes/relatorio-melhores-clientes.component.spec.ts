import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatorioMelhoresClientesComponent } from './relatorio-melhores-clientes.component';

describe('RelatorioMelhoresClientesComponent', () => {
  let component: RelatorioMelhoresClientesComponent;
  let fixture: ComponentFixture<RelatorioMelhoresClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMelhoresClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioMelhoresClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

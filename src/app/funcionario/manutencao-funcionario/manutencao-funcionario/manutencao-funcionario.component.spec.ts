import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoFuncionarioComponent } from './manutencao-funcionario.component';

describe('ManutencaoFuncionarioComponent', () => {
  let component: ManutencaoFuncionarioComponent;
  let fixture: ComponentFixture<ManutencaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

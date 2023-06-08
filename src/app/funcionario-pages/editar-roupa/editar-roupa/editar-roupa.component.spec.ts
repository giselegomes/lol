import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRoupaComponent } from './editar-roupa.component';

describe('EditarRoupaComponent', () => {
  let component: EditarRoupaComponent;
  let fixture: ComponentFixture<EditarRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRoupaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

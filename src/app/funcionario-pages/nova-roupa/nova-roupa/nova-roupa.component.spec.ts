import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaRoupaComponent } from './nova-roupa.component';

describe('NovaRoupaComponent', () => {
  let component: NovaRoupaComponent;
  let fixture: ComponentFixture<NovaRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaRoupaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

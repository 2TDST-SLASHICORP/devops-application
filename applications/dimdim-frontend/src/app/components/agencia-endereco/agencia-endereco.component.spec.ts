import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaEnderecoComponent } from './agencia-endereco.component';

describe('AgenciaEnderecoComponent', () => {
  let component: AgenciaEnderecoComponent;
  let fixture: ComponentFixture<AgenciaEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciaEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

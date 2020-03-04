import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica.Tipo.Clientes.InteractuanComponent } from './grafica.tipo.clientes.interactuan.component';

describe('Grafica.Tipo.Clientes.InteractuanComponent', () => {
  let component: Grafica.Tipo.Clientes.InteractuanComponent;
  let fixture: ComponentFixture<Grafica.Tipo.Clientes.InteractuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grafica.Tipo.Clientes.InteractuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafica.Tipo.Clientes.InteractuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

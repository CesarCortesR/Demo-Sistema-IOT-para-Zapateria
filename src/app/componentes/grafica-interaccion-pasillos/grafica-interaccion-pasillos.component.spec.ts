import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaInteraccionPasillosComponent } from './grafica-interaccion-pasillos.component';

describe('GraficaInteraccionPasillosComponent', () => {
  let component: GraficaInteraccionPasillosComponent;
  let fixture: ComponentFixture<GraficaInteraccionPasillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaInteraccionPasillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaInteraccionPasillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

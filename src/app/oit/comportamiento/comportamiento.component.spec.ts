import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportamientoComponent } from './comportamiento.component';

describe('ComportamientoComponent', () => {
  let component: ComportamientoComponent;
  let fixture: ComponentFixture<ComportamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComportamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComportamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCitasComponent } from './asignar-citas.component';

describe('AsignarCitasComponent', () => {
  let component: AsignarCitasComponent;
  let fixture: ComponentFixture<AsignarCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarCitasComponent]
    });
    fixture = TestBed.createComponent(AsignarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

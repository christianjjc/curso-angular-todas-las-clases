import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiServicioComponent } from './mi-servicio.component';

describe('MiServicioComponent', () => {
  let component: MiServicioComponent;
  let fixture: ComponentFixture<MiServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

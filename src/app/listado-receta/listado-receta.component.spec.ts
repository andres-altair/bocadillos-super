import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecetaComponent } from './listado-receta.component';

describe('ListadoRecetaComponent', () => {
  let component: ListadoRecetaComponent;
  let fixture: ComponentFixture<ListadoRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoRecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCancelarCompromissosComponent } from './pagina-cancelar-compromissos.component';

describe('PaginaCancelarCompromissosComponent', () => {
  let component: PaginaCancelarCompromissosComponent;
  let fixture: ComponentFixture<PaginaCancelarCompromissosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCancelarCompromissosComponent]
    });
    fixture = TestBed.createComponent(PaginaCancelarCompromissosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCriarCompromissosComponent } from './pagina-criar-compromissos.component';

describe('PaginaCriarCompromissosComponent', () => {
  let component: PaginaCriarCompromissosComponent;
  let fixture: ComponentFixture<PaginaCriarCompromissosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCriarCompromissosComponent]
    });
    fixture = TestBed.createComponent(PaginaCriarCompromissosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

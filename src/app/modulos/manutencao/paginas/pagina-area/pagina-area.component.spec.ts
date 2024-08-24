import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAreaComponent } from './pagina-area.component';

describe('PaginaAreaComponent', () => {
  let component: PaginaAreaComponent;
  let fixture: ComponentFixture<PaginaAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaAreaComponent]
    });
    fixture = TestBed.createComponent(PaginaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

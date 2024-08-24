import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDiasTrabalhoProfissionaisComponent } from './pagina-dias-trabalho-profissionais.component';

describe('PaginaDiasTrabalhoProfissionaisComponent', () => {
  let component: PaginaDiasTrabalhoProfissionaisComponent;
  let fixture: ComponentFixture<PaginaDiasTrabalhoProfissionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDiasTrabalhoProfissionaisComponent]
    });
    fixture = TestBed.createComponent(PaginaDiasTrabalhoProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

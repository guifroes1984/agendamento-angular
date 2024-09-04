import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoComponent } from './tempo.component';

describe('TempoComponent', () => {
  let component: TempoComponent;
  let fixture: ComponentFixture<TempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempoComponent]
    });
    fixture = TestBed.createComponent(TempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

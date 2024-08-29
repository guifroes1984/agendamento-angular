import { TestBed } from '@angular/core/testing';

import { TiposCompromissoService } from './tipos-compromisso.service';

describe('TiposCompromissoService', () => {
  let service: TiposCompromissoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposCompromissoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

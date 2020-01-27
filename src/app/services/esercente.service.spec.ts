import { TestBed } from '@angular/core/testing';

import { EsercenteService } from './esercente.service';

describe('EsercenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsercenteService = TestBed.get(EsercenteService);
    expect(service).toBeTruthy();
  });
});

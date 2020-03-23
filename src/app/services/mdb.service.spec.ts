import { TestBed } from '@angular/core/testing';

import { MdbService } from './mdb.service';

describe('MdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdbService = TestBed.get(MdbService);
    expect(service).toBeTruthy();
  });
});

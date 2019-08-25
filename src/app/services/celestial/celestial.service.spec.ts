import { TestBed } from '@angular/core/testing';

import { CelestialService } from './celestial.service';

describe('CelestialObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelestialService = TestBed.get(CelestialService);
    expect(service).toBeTruthy();
  });
});

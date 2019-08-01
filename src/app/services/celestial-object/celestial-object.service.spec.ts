import { TestBed } from '@angular/core/testing';

import { CelestialObjectService } from './celestial-object.service';

describe('CelestialObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelestialObjectService = TestBed.get(CelestialObjectService);
    expect(service).toBeTruthy();
  });
});

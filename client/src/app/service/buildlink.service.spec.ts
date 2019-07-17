import { TestBed } from '@angular/core/testing';

import { BuildlinkService } from './buildlink.service';

describe('BuildlinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildlinkService = TestBed.get(BuildlinkService);
    expect(service).toBeTruthy();
  });
});

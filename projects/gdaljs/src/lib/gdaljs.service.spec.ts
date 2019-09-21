import { TestBed } from '@angular/core/testing';

import { GdaljsService } from './gdaljs.service';

describe('GdaljsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GdaljsService = TestBed.get(GdaljsService);
    expect(service).toBeTruthy();
  });
});

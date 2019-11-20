import { TestBed } from '@angular/core/testing';

import { DataPassiingService } from './data-passiing.service';

describe('DataPassiingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPassiingService = TestBed.get(DataPassiingService);
    expect(service).toBeTruthy();
  });
});

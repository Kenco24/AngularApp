import { TestBed } from '@angular/core/testing';

import { LocationVerifyApiService } from './location-verify-api.service';

describe('LocationVerifyApiService', () => {
  let service: LocationVerifyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationVerifyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SpoonAPIService } from './spoon-api.service';

describe('SpoonAPIService', () => {
  let service: SpoonAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoonAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

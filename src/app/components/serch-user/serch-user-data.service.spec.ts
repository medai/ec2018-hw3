import { TestBed, inject } from '@angular/core/testing';

import { SerchUserDataService } from './serch-user-data.service';

describe('SerchUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerchUserDataService]
    });
  });

  it('should be created', inject([SerchUserDataService], (service: SerchUserDataService) => {
    expect(service).toBeTruthy();
  }));
});

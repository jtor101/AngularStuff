import { TestBed } from '@angular/core/testing';

import { UsersvService } from './usersv.service';

describe('UsersvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersvService = TestBed.get(UsersvService);
    expect(service).toBeTruthy();
  });
});

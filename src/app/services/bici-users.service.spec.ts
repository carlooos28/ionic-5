import { TestBed } from '@angular/core/testing';

import { BiciUsersService } from './bici-users.service';

describe('BiciUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiciUsersService = TestBed.get(BiciUsersService);
    expect(service).toBeTruthy();
  });
});

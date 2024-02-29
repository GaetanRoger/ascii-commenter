import { TestBed } from '@angular/core/testing';

import { MarginsService } from './margins.service';

describe('MarginsService', () => {
  let service: MarginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { MarginsService } from './margins.service';

describe('MarginsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarginsService]
    });
  });

  it('should be created', inject([MarginsService], (service: MarginsService) => {
    expect(service).toBeTruthy();
  }));
});

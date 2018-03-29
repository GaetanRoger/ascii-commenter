import { TestBed, inject } from '@angular/core/testing';

import { BorderService } from './border.service';

describe('BorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorderService]
    });
  });

  it('should be created', inject([BorderService], (service: BorderService) => {
    expect(service).toBeTruthy();
  }));
});

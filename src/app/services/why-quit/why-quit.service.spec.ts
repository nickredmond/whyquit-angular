import { TestBed, inject } from '@angular/core/testing';

import { WhyQuitService } from './why-quit.service';

describe('WhyQuitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhyQuitService]
    });
  });

  it('should be created', inject([WhyQuitService], (service: WhyQuitService) => {
    expect(service).toBeTruthy();
  }));
});

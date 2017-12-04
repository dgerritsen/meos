import { TestBed, inject } from '@angular/core/testing';

import { HeaderactionService } from './headeraction.service';

describe('HeaderactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderactionService]
    });
  });

  it('should be created', inject([HeaderactionService], (service: HeaderactionService) => {
    expect(service).toBeTruthy();
  }));
});

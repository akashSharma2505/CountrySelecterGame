import { TestBed, inject } from '@angular/core/testing';

import { GetcountrydataService } from './getcountrydata.service';

describe('GetcountrydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcountrydataService]
    });
  });

  it('should be created', inject([GetcountrydataService], (service: GetcountrydataService) => {
    expect(service).toBeTruthy();
  }));
});

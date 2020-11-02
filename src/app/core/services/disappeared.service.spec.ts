import { TestBed } from '@angular/core/testing';

import { DisappearedService } from './disappeared.service';

describe('DisappearedService', () => {
  let service: DisappearedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisappearedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

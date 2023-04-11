import { TestBed } from '@angular/core/testing';

import { ApiService} from '../Service/api-service.service';

describe('ApiServiceService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpSrviceService } from './http-srvice.service';

describe('HttpSrviceService', () => {
  let service: HttpSrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

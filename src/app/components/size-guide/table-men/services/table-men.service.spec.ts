import { TestBed } from '@angular/core/testing';

import { TableMenService } from './table-men.service';

describe('TableMenService', () => {
  let service: TableMenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableMenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

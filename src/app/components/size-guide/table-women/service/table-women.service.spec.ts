import { TestBed } from '@angular/core/testing';

import { TableWomenService } from './table-women.service';

describe('TableWomenService', () => {
  let service: TableWomenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableWomenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

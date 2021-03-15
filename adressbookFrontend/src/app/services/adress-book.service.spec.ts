import { TestBed } from '@angular/core/testing';

import { AdressBookService } from './adress-book.service';

describe('AdressBookService', () => {
  let service: AdressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

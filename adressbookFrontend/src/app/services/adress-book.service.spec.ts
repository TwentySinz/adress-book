import { TestBed } from '@angular/core/testing';

import { AdressBookService } from './adress-book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AdressBookService', () => {
  let service: AdressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdressBookService]
    });
    service = TestBed.inject(AdressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

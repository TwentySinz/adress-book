import { TestBed } from '@angular/core/testing';

import { AdressBookService } from './adress-book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Person } from '../models/Person';

describe('AdressBookService', () => {
  let service: AdressBookService;
  let httpTestCtrl: HttpTestingController;

  const personsMock: Person[] = [
    new Person(
      1,
      'Max',
      'Mustermann',
      '01-01-1991',
      '01234',
      '04321',
      'max@mustermann.de',
      'Musterstraße',
      1,
      10001,
      'Musterstadt',
      'Musterland',
      'male.jpg',
      30),
      new Person(
        2,
        'Maxi',
        'Mustermann',
        '01-02-1991',
        '01239',
        '04329',
        'maxi@mustermann.de',
        'Musterstraße',
        2,
        10002,
        'Musterstadt',
        'Musterland',
        'female.jpg',
        30)
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdressBookService]
    });
    service = TestBed.inject(AdressBookService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have correct API-URL', () => {
    expect(service.personURL).toEqual('http://localhost:8080/api/v1/persons');
  });

  it('should get Persons', () => {
    // tslint:disable-next-line: deprecation
    service.getPersons().subscribe(result => {
      expect(personsMock).toBe(result);
    });

    const req = httpTestCtrl.expectOne(service.personURL);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toBe('json');
    req.flush(personsMock);
  });

  it('should add Person', () => {
    const personMock: Person = personsMock[0];

    // tslint:disable-next-line: deprecation
    service.addPerson(personMock).subscribe(result => {
      expect(personMock).toBe(result);
    });

    const url: string = service.personURL + '/add';
    const req = httpTestCtrl.expectOne(url);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('POST');
    expect(req.request.responseType).toBe('json');
    req.flush(personMock);
  });

  it('should update Person', () => {
    const personMock: Person = personsMock[1];
    personMock.firstName = 'Maximiliane';

    // tslint:disable-next-line: deprecation
    service.updatePerson(personMock).subscribe(result => {
      expect(personMock).toBe(result);
    });

    const url: string = service.personURL + '/update/' + personMock.id;
    const req = httpTestCtrl.expectOne(url);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('PUT');
    expect(req.request.responseType).toBe('json');
    req.flush(personMock);
  });

  it('should delete Person', () => {
    const idMock: number = personsMock[0].id;

    // tslint:disable-next-line: deprecation
    service.deletePerson(idMock).subscribe(result => {
      expect(result).toBeTruthy();
    });

    const url: string = service.personURL + '/delete/' + idMock;
    const req = httpTestCtrl.expectOne(url);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('DELETE');
    expect(req.request.responseType).toBe('json');
    req.flush(idMock);
  });
});

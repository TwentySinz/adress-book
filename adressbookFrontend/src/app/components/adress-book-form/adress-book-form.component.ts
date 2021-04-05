import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdressBookService } from '../../services/adress-book.service';
import { Person } from 'src/app/models/Person';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adress-book-form',
  templateUrl: './adress-book-form.component.html',
  styleUrls: ['./adress-book-form.component.scss']
})
export class AdressBookFormComponent implements OnInit {
  rFormPerson: FormGroup;
  newPerson: Person;
  isEdit: boolean;
  currentPersonId: number;

  formValidationMsgs = {
    firstName: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name exceeded 50 characters' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'First Name exceeded 50 characters' }
    ],
    dateOfBirth: [
      { type: 'required', message: 'Date of Birth is required' },
      { type: 'invalidDate', message: 'Date of Birth is in the future' }
    ],
    avatarURL: [
      { type: 'required', message: 'Avatar is required' }
    ],
    street: [
      { type: 'required', message: 'Street is required' },
      { type: 'maxlength', message: 'Street exceeded 50 characters' }
    ],
    houseNumber: [
      { type: 'required', message: 'House Number is required' },
      { type: 'max', message: 'House Number exceeded 8 characters' },
      { type: 'min', message: 'House Number cannot be 0 or negative' }
    ],
    postCode: [
      { type: 'required', message: 'Post Code is required' },
      { type: 'max', message: 'Post Code exceeded 5 characters' },
      { type: 'min', message: 'Post Code cannot be negative' }
    ],
    city: [
      { type: 'required', message: 'City is required' },
      { type: 'maxlength', message: 'City exceeded 50 characters' }
    ],
    country: [
      { type: 'required', message: 'Country is required' },
      { type: 'maxlength', message: 'Country exceeded 50 characters' }
    ],
    phonePrivate: [
      { type: 'required', message: 'Phone is required' },
      { type: 'maxlength', message: 'Phone exceeded 20 characters' },
      { type: 'min', message: 'Phone cannot be negative' }
    ],
    phoneBusiness: [
      { type: 'maxlength', message: 'Phone Business exceeded 20 characters' },
      { type: 'min', message: 'Phone Business cannot be negative' }
    ],
    email: [
      { type: 'required', message: 'E-Mail is required' },
      { type: 'maxlength', message: 'E-Mail exceeded 100 characters' },
      { type: 'email', message: 'E-Mail is not valid' }
    ]
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: Person, private adressBookService: AdressBookService) {
    this.rFormPerson = new FormGroup({
      firstName: new FormControl(data ? data.firstName : '', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl(data ? data.lastName : '', [Validators.required, Validators.maxLength(50)]),
      dateOfBirth: new FormControl(data ? data.dateOfBirth : '', [Validators.required, this.custDateValidation()]),
      avatarURL: new FormControl(data ? data.avatarURL : '', [Validators.required]),
      street: new FormControl(data ? data.street : '', [Validators.required, Validators.maxLength(50)]),
      houseNumber: new FormControl(data ? data.houseNumber : '', [Validators.required, Validators.max(99999999), Validators.min(1)]),
      postCode: new FormControl(data ? data.postCode : '', [Validators.required, Validators.max(99999), Validators.min(0)]),
      city: new FormControl(data ? data.city : '', [Validators.required, Validators.maxLength(50)]),
      country: new FormControl(data ? data.country : '', [Validators.required, Validators.maxLength(50)]),
      phonePrivate: new FormControl(data ? data.phonePrivate : '', [Validators.required, Validators.maxLength(20), Validators.min(0)]),
      phoneBusiness: new FormControl(data ? data.phoneBusiness : '', [Validators.maxLength(20), Validators.min(0)]),
      email: new FormControl(data ? data.email : '', [Validators.required, Validators.maxLength(100), Validators.email])
    });
    this.newPerson = new Person();
    data ? this.currentPersonId = data.id : this.currentPersonId = -1;
    data ? this.isEdit = true : this.isEdit = false;
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newPerson = this.rFormPerson.value;
    if (this.isEdit) {
      this.newPerson.id = this.currentPersonId;
      // tslint:disable-next-line: deprecation
      this.adressBookService.updatePerson(this.newPerson).subscribe(
        (response: any) => {
          console.log(response);
          alert('Your contact has successfuly been updated.');
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        });
    }
    else {
      // tslint:disable-next-line: deprecation
      this.adressBookService.addPerson(this.newPerson).subscribe(
        (response: Person) => {
          alert('Your new contact has successfuly been added.');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
    }
  }

  onCancel(): void {
    this.rFormPerson.reset();
  }

  custDateValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const now: Date = new Date();
      const inputDate: Date = new Date(control.value);
      return inputDate.getFullYear() > now.getFullYear() ||
        inputDate.getFullYear() === now.getFullYear() && inputDate.getMonth() > now.getMonth() ||
        inputDate.getFullYear() === now.getFullYear() && inputDate.getMonth() === now.getMonth() && inputDate.getDate() > now.getDate()  ?
        {invalidDate: {value: control.value}} : null;
    };
  }
}

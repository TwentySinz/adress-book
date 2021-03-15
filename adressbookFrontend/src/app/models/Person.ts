export class Person {
    constructor(id?: number,
                firstName?: string,
                lastName?: string,
                dateOfBirth?: string,
                phonePrivate?: string,
                phoneBusiness?: string,
                email?: string,
                street?: string,
                houseNumber?: number,
                postCode?: number,
                city?: string,
                country?: string,
                avatarURL?: string,
                age?: number
                ) {
        this.id = id || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.dateOfBirth = dateOfBirth || '';
        this.phonePrivate = phonePrivate || '';
        this.phoneBusiness = phoneBusiness || '';
        this.email = email || '';
        this.street = street || '';
        this.houseNumber = houseNumber || 0;
        this.postCode = postCode || 0;
        this.city = city || '';
        this.country = country || '';
        this.avatarURL = avatarURL || '';
        this.age = age || 0;
    }
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phonePrivate: string;
    phoneBusiness: string;
    email: string;
    street: string;
    houseNumber: number;
    postCode: number;
    city: string;
    country: string;
    avatarURL: string;
    age: number;
}

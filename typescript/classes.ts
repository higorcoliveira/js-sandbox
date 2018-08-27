class Person {
    firstName: string;
    lastName: string;

    constructor(firstname: string, lastname: string) {
        this.firstName = firstname;
        this.lastName = lastname;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let aPerson = new Person('John', 'Doe');
console.log(aPerson.getFullName());
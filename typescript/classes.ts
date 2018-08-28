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

let aPerson1 = new Person('John', 'Doe');
console.log(aPerson1.getFullName());
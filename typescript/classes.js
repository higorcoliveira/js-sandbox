var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var aPerson = new Person('John', 'Doe');
console.log(aPerson.getFullName());

var OneMorePerson = /** @class */ (function () {
    function OneMorePerson(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // private inside the constructor make the values atributes
    }
    return OneMorePerson;
}());
var aPerson = new OneMorePerson('a', 'b', 11);
console.log(aPerson);

import { AnotherPerson } from "./inheritance";

function echo<T>(arg: T): T  {
    return arg;
}

console.log(echo(1));

class Admin extends AnotherPerson {

}

class Manager extends AnotherPerson {
    
}

let admin = new Admin();
let manager = new Manager();

function personEcho<T extends AnotherPerson>(person: T): T {    
    return person;
}

let printAdmin = personEcho(admin);
let printManager = personEcho(manager);
class AnotherPerson {
    firstName: string;
    lastName: string;

    greet() {
        console.log('Hey there!');
    }
}

class Programmer extends AnotherPerson {
    greet() {
        console.log('Hello world!');
    }

    greetLikeNormalPeople() {
        super.greet();
    }
}

let aProg: AnotherPerson = new Programmer();
let bProg = new Programmer();
aProg.greet();
bProg.greetLikeNormalPeople();

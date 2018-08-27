class OneMorePerson {   

    readonly age; // same as const, but TS don't allow to use const inside class

    constructor(private firstName: string, private lastName: string, age: number) {
        this.age = age;
        // private inside the constructor make the values atributes
    }
}

let aPerson = new OneMorePerson('a', 'b', 11);
console.log(aPerson);
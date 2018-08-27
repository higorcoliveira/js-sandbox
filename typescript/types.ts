let a: number = 10;
let b: string = "teste";
let c: boolean = true;
let d: any; // equivalent to Object in Java
let e: number | boolean; // only this two types

d = 'ABC';
d = 1;

e = 11;
e = false;

console.log(a, b, c);
console.log(d);
console.log(e);

let myArray: number[]; // array declaration
myArray = [];
myArray = [1, 2];
myArray.push(1);

console.log(myArray);

let arrayWithDifferentTypes: [number, boolean]; // tuple
arrayWithDifferentTypes = [1, true];

console.log(arrayWithDifferentTypes);

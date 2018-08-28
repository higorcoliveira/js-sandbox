import { Animal } from "./Animal";
import * as _ from 'lodash';

let aAnimal1 = new Animal('ape', 2);
let aAnimal2 = new Animal('dog', 4);

let animals1 = []
animals1.push(aAnimal1, aAnimal2);

let animals2 = []
animals2.push(aAnimal2);

console.log(_.intersection(animals1, animals2));
console.log(`My animal is a ${aAnimal1.getSpecie()} and have ${aAnimal1.getNumberOfPaws()} paws`);
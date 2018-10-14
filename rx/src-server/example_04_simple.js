import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// do
Rx.Observable.range(1, 10)
    .do(a => console.log(`From do ${a}`)) // não modifica a sequência de stream
    .map(a => a * 2)
    .subscribe(createSubscriber$("simple"));

// finally
Rx.Observable.range(1, 10)
    .finally(() => console.log(`From finally`)) // só executa no final do subscription
    .map(a => a * 2)
    .subscribe(createSubscriber$("finally"));

// filter
Rx.Observable.range(1, 10)
    .filter(a => a < 5) // mesma funcionalidade do filter do java 8
    .subscribe(createSubscriber$("filter"));

//startWith
Rx.Observable.interval(1000)
    .startWith(-1) // faz o merge do valor no início do stream
    .subscribe(createSubscriber$("startWith"));
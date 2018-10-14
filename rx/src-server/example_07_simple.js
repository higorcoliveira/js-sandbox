import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// reduce
Rx.Observable.range(1, 10)    
    .reduce((acc, value) => acc + value) 
    .subscribe(createSubscriber$("reduce"));

// scan
Rx.Observable.range(1, 10)    
    .scan((acc, value) => acc + value) 
    // mesma função do reduce, mas vai produzindo valores conforme o stream vai recebendo inputs
    // recomendado para Observables que são 'hot'
    .subscribe(createSubscriber$("scan"));
import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// buffer
Rx.Observable.range(1, 1000)    
    .bufferCount(50) // faz o buffer da quantidade especificada
    .subscribe(createSubscriber$("items"));

// toArray
Rx.Observable.range(1, 10)
    .toArray()
    .subscribe(createSubscriber$("toArray"));
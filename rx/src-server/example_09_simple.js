import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// zip
// Rx.Observable.range(1, 10)    
//     .zip(Rx.Observable.interval(500), (left, right) => `item: ${left}, at ${right * 500}`)
//     // left é o range, right é o observable do zip
//     // pega o observable original e faz uma operação em outro observable
//     .subscribe(createSubscriber$("zip"));

// withLatestFrom
// Rx.Observable.interval(1000)   
//     .withLatestFrom(Rx.Observable.interval(500))    
//     .take(5)
//     .subscribe(createSubscriber$("withLatestFrom"));

// combineLatest
Rx.Observable.interval(1000)    
    .combineLatest(Rx.Observable.interval(500))
    .take(5)
    .subscribe(createSubscriber$("combineLatest"));

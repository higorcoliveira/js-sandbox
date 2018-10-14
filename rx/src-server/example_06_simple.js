import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// merge
// Rx.Observable.interval(1000)
//     .take(5)
//     .map(a => a * a) 
//     .subscribe(createSubscriber$("map"));

// mergeMap = flatMap
// Rx.Observable.range(1, 3)
//     .mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `After ${i * 2} Seconds`))
//     .subscribe(createSubscriber$("mergeMap"));

// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks)) // faz o merge mas retorna outra coisa, nessa caso um observable
//     .subscribe(createSubscriber$("tracks"));

function getTracks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["track 1", "track 2", "track 3"])
        }, 1000);
    });
}

// switchMap
Rx.Observable.fromPromise(getTracks())
    .switchMap(tracks => Rx.Observable.from(tracks)) // só libera quando o último item é processado
    .subscribe(createSubscriber$("switchMap"));
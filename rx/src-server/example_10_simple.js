import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// catch
Rx.Observable.fromPromise(getApi())
    .catch(error => Rx.Observable.of(error))
    // encapsula o erro dentro de um item do stream
    .subscribe(createSubscriber$("api"));

function getApi() {
    console.log("getting data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error());
        }, 1000)
    })
}

// retry
Rx.Observable.fromPromise(getApi())
    .retry(3)
    .catch(error => Rx.Observable.of(error))    
    .subscribe(createSubscriber$("api"));
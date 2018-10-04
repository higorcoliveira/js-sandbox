import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber$("interval"));

// Rx.Observable.timer(1000, 500)
//     .take(5)
//     .subscribe(createSubscriber$("time"));

Rx.Observable.of(["this", "is"])
    .subscribe(createSubscriber$("of"));

Rx.Observable.from(["this", "is"])
    .subscribe(createSubscriber$("from"));

Rx.Observable.throw(123456)
    .subscribe(createSubscriber$("error"));

Rx.Observable.empty()
    .subscribe(createSubscriber$("empty"));

Rx.Observable.never()
    .subscribe(createSubscriber$("never"));

Rx.Observable.range(10, 30)
    .subscribe(createSubscriber$("range"));
import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

// merge
Rx.Observable.interval(1000).take(5)
    .merge(Rx.Observable.interval(500).take(10)) // junta outro stream
    .subscribe(createSubscriber$("merge1"));

// concta
Rx.Observable.range(1, 5)
    .concat(Rx.Observable.range(10, 3))
    .subscribe(createSubscriber$("concat"));
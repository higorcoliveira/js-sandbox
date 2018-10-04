import Rx from "rxjs/Rx";
import { createSubscriber$ } from "./lib/util";

function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => { // free resources
            clearInterval(interval);
        }
    });
}

// take the source Observable and apply some operators (finish after 5 items)
function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) {
                observer.next(item);
                if (++count >= amount)
                    observer.complete();
            },
            error(error) { observer.error(error); },
            complete() { observer.complete(); }
        });

        return () => subscription.unsubscribe();
    });
}

const everySecond$ = createInterval$(1000);
const firstFiveItems$ = take$(everySecond$, 5); // chaining observables
const subscription = firstFiveItems$.subscribe(createSubscriber$("one"));

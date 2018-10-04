import Rx from "rxjs/Rx";

const simple$ = new Rx.Observable(observer => {
    console.log("Generating observable");
    setTimeout(() => {
        observer.next("An Item!");
        setTimeout(() => {
            observer.next(() => {
                observer.next("Another item!");
                observer.complete();
            })
        }, 1000)
    }, 1000);
});

const error$ = new Rx.Observable(observer => {
    observer.error(new Error("ERROR!!"));
});

error$.subscribe(
    item => console.log(`one.next ${item}`),    // next item
    error => console.log(`one.error ${error}`), // on error
    () => console.log("one.complete")           // on complete
);

// another subscribe, passing objects instead functions
setTimeout(() => {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error(error) {
            console.log(`two.error ${error}`)
        },
        complete: function() {
            console.log("two.complete");
        }
    });
}, 3000);
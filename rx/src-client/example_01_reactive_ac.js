import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

// set the stream of events
Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value) // capture the typed value
    .distinctUntilChanged() // ignore keyboard arrows
    .debounceTime(500) // time to wait until send the completed value to getItemns
    .switchMap(getItems) // returns a list of itens after promise is resolved
    .subscribe(items => { // listen to the events when completes
        $results.empty;
        $results.append(items.map(i => $('<li />').text(i)));
    });

// API Library Mock
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random() }`]);
        }, 500 + (Math.random() * 1000));
    });
}
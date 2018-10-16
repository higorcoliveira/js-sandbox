import $ from "jquery";
import Rx from "rxjs/Rx";

// Objetos da UI 
const $drag = $("#drag");
const $document = $(document);
const $dropAreas = $(".drop-area");

// Observables
const beginDrag$ = Rx.Observable.fromEvent($drag, "mousedown");
const endDrag$ = Rx.Observable.fromEvent($document, "mouseup");
const mouseMove$ = Rx.Observable.fromEvent($document, "mousemove");

const currentOverArea$ = Rx.Observable.merge(
    Rx.Observable.fromEvent($dropAreas, "mouseover").map(e => $(e.target)),  
    Rx.Observable.fromEvent($dropAreas, "mouseout").map(e => null));

const drops$ = beginDrag$
    .do(e => {
        e.preventDefault();
        $drag.addClass("dragging");
    })
    .mergeMap(startEvent => {
        return mouseMove$
            .takeUntil(endDrag$) // pegando o movimento do componente até que um evento seja disparado
            .do(moveEvent => moveDrag(startEvent, moveEvent)) // side-effect depois que o evento é disparado (é o que movimenta o quadrado cinza)
            .last() // pausa o restante da execução até isso ser finalizado
            .withLatestFrom(currentOverArea$, (_, $area) => $area);
    })
    .do(() => {
        $drag.removeClass("dragging")
            .animate({top: 0, left: 0}, 250);
    })

// processa o stream e deixa amarelo a div quando o quadrado cinza é arrastado por cima
drops$.subscribe($dropArea => {
    $dropAreas.removeClass("dropped");
    if ($dropArea) $dropArea.addClass("dropped");
});

// utilitário
function moveDrag(startEvent, moveEvent) {
    $drag.css({
        left: moveEvent.clientX - startEvent.offsetX,
        top: moveEvent.clientY - startEvent.offsetY
    })
}
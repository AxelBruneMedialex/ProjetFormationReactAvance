import {fromEvent} from "rxjs";
import {useEffect} from "react";

function MonBoutonRxJs(){
    useEffect(() => {
        const button = document.getElementById('MonBoutonRxJs');

        const clickObservable = fromEvent(button, 'click');

        const clickObsverver = {
            next: event => console.log("Click !", event),
            error: error => console.log("Erreur !", error),
            complete: () => console.log("Complété !")
        };

        const subscription = clickObservable.subscribe(clickObsverver);
        return () => subscription.unsubscribe();
    }, []);


    return <button id="MonBoutonRxJs">MonBoutonRxJs</button>
}

export default MonBoutonRxJs;
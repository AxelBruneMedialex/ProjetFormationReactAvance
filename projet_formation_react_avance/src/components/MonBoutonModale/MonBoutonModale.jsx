import {useMonContexte} from "../../Contexts/MonContexte";

function MonBoutonModale(){
    const context = useMonContexte();
    return <button onClick={context.openCloseModale}>Ouvrir la modale</button>
}

export default MonBoutonModale;
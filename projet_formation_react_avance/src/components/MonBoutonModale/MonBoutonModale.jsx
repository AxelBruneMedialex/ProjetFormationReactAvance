import {useMonContexte} from "../../Contexts/MonContexte";
import './MonBoutonModale.css';

function MonBoutonModale(){
    const context = useMonContexte();
    return <button onClick={context.openCloseModale} className="MonBoutonModale">Ouvrir la modale</button>
}

export default MonBoutonModale;
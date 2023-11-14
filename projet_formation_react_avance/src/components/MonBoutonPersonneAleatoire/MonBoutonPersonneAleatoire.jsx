import {useDispatch, useSelector} from "react-redux";
import {fetchRandomPerson} from "../../stores/ReduxToolkit/reduxToolkitStore";

function MonBoutonPersonneAleatoire(){
    const dispatch = useDispatch();
    const utilisateursStore = useSelector(
        (state) => state.utilisateurs
    );
    const handleClick = () => {
        dispatch(fetchRandomPerson())
    }

    return <>
        <button onClick={handleClick}>
            Trouver une personne aléatoire via API :
        </button>
        {utilisateursStore.randomPerson}
    </>
}

export default MonBoutonPersonneAleatoire;
import {connect, useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addUtilisateur, removeUtilisateur} from "../../stores/ReduxToolkit/reduxToolkitStore";

function MesUtilisateurs({utilisateurs}){
    const [nom, setNom] = useState('');
    const utilisateursStore = useSelector(
        (state) => state.utilisateurs
    );
    const dispatch = useDispatch();

    return <div>
        <div>
            Liste des utilisateurs Toolkit:
            <div>
                <input value={nom} onChange={(e) => setNom(e.target.value)} />
                <button onClick={() => {
                    dispatch(addUtilisateur(nom));
                    setNom('');
                }}>
                    +
                </button>
            </div>
            <ul>
                {
                    utilisateursStore.utilisateurs.map((utilisateur, index) => <li key={`utilisateurReduxToolkit-${index}`}>
                        {utilisateur + ' '}
                        <button onClick={() => dispatch(removeUtilisateur(utilisateur))}>-</button>
                    </li>)
                }
            </ul>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    utilisateurs: state.utilisateurs.utilisateurs
});


export default connect(mapStateToProps)(MesUtilisateurs);
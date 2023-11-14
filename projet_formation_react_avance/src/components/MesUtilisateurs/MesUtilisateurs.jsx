import {connect, useSelector} from "react-redux";
import {useState} from "react";

function MesUtilisateurs({utilisateurs, dispatch}){
    const [nom, setNom] = useState('');

    return <div>
        <div>
            Liste des utilisateurs Redux:
            <div>
                <input value={nom} onChange={(e) => setNom(e.target.value)} />
                <button onClick={() => {
                    dispatch({type: 'ADD_USER', payload: nom});
                    setNom('');
                }}>
                    +
                </button>
            </div>
            <ul>
                {
                    utilisateurs.map((utilisateur, index) => <li key={`utilisateurRedux-${index}`}>
                        {utilisateur + ' '}
                        <button onClick={() => dispatch({type: 'REMOVE_USER', payload: utilisateur})}>-</button>
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
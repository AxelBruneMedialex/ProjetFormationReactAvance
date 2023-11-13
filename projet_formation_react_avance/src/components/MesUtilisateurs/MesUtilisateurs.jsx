import {connect} from "react-redux";
import {useState} from "react";

function MesUtilisateurs({utilisateurs, dispatch}){
    const [nom, setNom] = useState('');

    return <div>
        Liste des utilisateurs :
        <div>
            <input value={nom} onChange={(e) => setNom(e.target.value)} />
            <button onClick={() => dispatch({type: 'ADD_USER', payload: nom})}>+</button>
        </div>
        <ul>
            {
                utilisateurs.map((utilisateur) => <li>
                    {utilisateur + ' '}
                    <button onClick={() => dispatch({type: 'REMOVE_USER', payload: utilisateur})}>-</button>
                </li>)
            }
        </ul>
    </div>
}

const mapStateToProps = (state) => ({
    utilisateurs: state.utilisateurs.utilisateurs
});


export default connect(mapStateToProps)(MesUtilisateurs);
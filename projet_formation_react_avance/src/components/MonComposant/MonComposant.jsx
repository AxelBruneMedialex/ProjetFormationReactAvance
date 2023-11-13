import './MonComposant.css';
function MonComposant({onClick}){
    return <div onClick={onClick} className="MonComposant">
        Ceci est mon composant
    </div>
}

export default MonComposant;
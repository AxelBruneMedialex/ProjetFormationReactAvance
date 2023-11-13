import './MonComposant.css';
function MonComposant({onClick, theme}){
    return <div onClick={onClick} className={`MonComposant MonComposant_${theme}`}>
        Passer en {theme === "light" ? 'dark' : 'light'} Mode
    </div>
}

export default MonComposant;
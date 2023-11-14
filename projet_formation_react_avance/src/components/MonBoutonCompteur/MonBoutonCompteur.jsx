import useCustomHook from "../../hooks/useCustomHook";

function MonBoutonCompteur(){
    const {value, increment, decrement} = useCustomHook(0);

    return <div>
        Compteur avec hook custom : &nbsp;
        <button onClick={decrement}>-</button>
        <span>{value}</span>
        <button onClick={increment}>+</button>
    </div>
}

export default MonBoutonCompteur;
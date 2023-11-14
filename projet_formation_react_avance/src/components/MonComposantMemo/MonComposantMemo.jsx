import {useMemo, useState} from "react";

function MonComposantMemo(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const expensiveValue = useMemo(() => {
        console.log('Calculating expensiveValue...');
        return a + b;
    }, [a, b]);

    return <div>
        <p>{`a: ${a}, b: ${b}`}</p>
        <p>{`Expensive Value: ${expensiveValue}`}</p>
        <button onClick={() => setA(a + 1)}>Increment A</button>
        <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
}

export default MonComposantMemo;
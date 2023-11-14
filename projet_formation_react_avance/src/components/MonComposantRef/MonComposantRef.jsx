import {useRef} from "react";

function MonComposantRef(){
    const monInput = useRef(null);
    const handleClick = () => {
        monInput.current.value = "Hello World !";
        monInput.current.focus();
    }
    return (
        <div>
            <input ref={monInput} type="text" />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export default MonComposantRef;
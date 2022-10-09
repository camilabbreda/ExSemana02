import React, {useRef} from 'react';

export default function Exercise05() {
    const focarAqui = useRef(0)
function focaNoInput(){
    focarAqui.current.focus();
}

    return(
        <div>
            <input type="text" ref={focarAqui}></input>
            <button onClick={focaNoInput}>Focar no Input</button>
        </div>
    )
}
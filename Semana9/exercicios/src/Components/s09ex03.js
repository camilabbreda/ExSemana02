import React, { useState, useEffect } from 'react';

export default function Exercise03(){
const [contador, setContador] = useState(0)
    return(
        <div>
            <h1>Você clicou {contador} vezes</h1>
            <button onClick={()=> setContador((prev)=>prev+1)}>Clique aqui</button>
        </div>
    )
}
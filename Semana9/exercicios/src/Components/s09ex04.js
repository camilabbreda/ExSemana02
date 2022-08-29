import React, { useState, useEffect} from 'react';



export default function Exercise04() {
    const [valorBotao, setValorBotao] = useState ()
    useEffect(() => {
        document.title = valorBotao;
      },[valorBotao]);
    return (
        <div>
            <span>Botão clicado: {valorBotao}</span>
            <button onClick={()=>setValorBotao('Título 1')} >Título 1</button>
            <button onClick={()=>setValorBotao("Título 2")}>Título 2</button>
        </div>
    )
}
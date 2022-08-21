import './s08ex03.css';
export default function PrimeiroProjetoReact({titulo, texto}){
    return(
        <div >
           
            <div className = "titulo">
            <h1 >{titulo}</h1>
            </div>
            <div style = {{textAlign: "center", backgroundColor:"yellow", fontStyle: "italic" }}>
            <p>{texto}</p>
            </div>
        </div>
    )
}



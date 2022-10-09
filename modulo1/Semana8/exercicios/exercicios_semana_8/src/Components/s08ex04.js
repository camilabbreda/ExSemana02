//Props são propriedades de um objeto que podem receber diversos valores
export default function Estilo ({cor}){
return(
    <div>
        <h1 style = { {  color: cor , textAlign: "center"} }>Esse titulo é {cor}</h1>
    </div>
)
}
export default function Pokemon({card,imagemPokemon,idPokemon,nomePokemon,tipoPokemon}){
    return(
        <div className= {tipoPokemon}>
            <img className="imagemPokemon" src={imagemPokemon} />
            <p className = "idPokemon">#{idPokemon}</p>
            <h1>{nomePokemon}</h1>
            <h4>Type: {tipoPokemon}</h4>
        </div>
    )
}
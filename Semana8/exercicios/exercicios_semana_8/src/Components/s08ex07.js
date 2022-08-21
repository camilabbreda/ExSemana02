export default function Post ({ 
    fotoDePerfil,
    nomeDoUsuario,
    horaPublicacao,
    descricao,
    fotoDaPublicacao,
    numeroDeComentarios,
    curtidoPor
}){
return(
    <>
    <div>
        <div style={{display: "flex", flexAlign:"row", width: "30%"}}>
            <img style={{height: "80px"}} src={fotoDePerfil}/>
            <div style={{display: "flex", flexDirection: "column", textAlign:"left"}}>
                <h2 style={{marginBottom: "0px"}}>{nomeDoUsuario}</h2>
                <p style={{marginTop: "0px"}}>{horaPublicacao}</p>
            </div>
        
            <img style={{height: "10px", marginRight:"-20px", marginLeft:"50px"}} src="https://cdn-icons-png.flaticon.com/512/61/61140.png"/>
        </div>
        <div>   
            <p>{descricao}</p>
            <img style={{height: "300px"}} src= {fotoDaPublicacao}/>
        </div>
        <div>
            <div style={{display: "flex", flexDirection: "row", textAlign:"left", verticalAlign: "middle"}}>
             <img style={{height: "20px", width:"20px"}} src= {
                numeroDeComentarios>=1 ? ("https://i.pinimg.com/originals/27/42/95/274295614b1f1971b08ab25420222b6a.png"):("https://cdn-icons-png.flaticon.com/512/2/2267.png")
             }/>
             <p style={{marginTop: "0px"}}>{numeroDeComentarios} Comments</p>
             <p style={{marginTop: "0px", marginLeft:"140px"}}>Share</p>
            </div>
            <p style={{marginTop: "0px"}}>Liked by {curtidoPor} and {numeroDeComentarios-1} others</p>
        </div>

    </div>

    </>
)
}
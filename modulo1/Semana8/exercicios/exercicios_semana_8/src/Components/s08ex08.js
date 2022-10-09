export default function Contato({photo, name, description}){
    return(
        <div style={{display: "flex", flexDirection:"row", borderColor:"black"}}>
            <img style={{borderRadius: "50%", width:"10%", height:"100px"}} src={photo}/>
            <div>
                <h1 style={{marginTop:"20px", marginLeft:"20px", marginBottom:"0px"}}> {name} </h1>
                <p style={{marginTop:"0px", marginLeft:"20px"}}> {description} </p>
            </div>
        </div>
    )

}

Contato.defaultProps={
    photo: "https://cdn.xxl.thumbs.canstockphoto.com.br/perfil-azul-uso-femininas-soci-avatar-fundo-branca-%C3%ADcone-vetor-eps_csp21530087.jpg",
    name: "anônimo",
    description:"nada a declarar"
}
export default function Produto({photoProduto, nameProduto, priceProduto}){
    return(
<div style={{width:"200px", border:"solid",borderWidth:"2px", padding:"20px", margin:"30px",borderColor:"grey", textAlign: "center" }}>
           <img style={{height:"150px"}} src={photoProduto}/>
           <h2>{nameProduto}</h2>
           <h3>{priceProduto}</h3>

        </div>
    )
}
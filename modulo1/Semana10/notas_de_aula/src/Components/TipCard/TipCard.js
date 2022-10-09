import apagarPost from "../../Imagens/apagarPost.png"
import editarPost from "../../Imagens/editarPost.png"
import playPost from "../../Imagens/playPost";


export default function TipCard({id, titulo, linguagem, categoria, descricao, video}) {


    return (

        <li className="publicacoes" id="publicacoes2" name={id}>
            <div style={{ marginLeft: "30px" }}>
                <div id="tituloPublicado">
                    <p> {titulo}</p>
                </div>
                <div className="caixaDeTextoPublicacao" >
                    <p className="publicado">Linguagem/Skill:</p>
                    <p id="inserirLiguagemSkill">{linguagem}</p>
                </div>
                <div className="caixaDeTextoPublicacao">
                    <p className="publicado">Categoria: </p>
                    <p id="irerirCategoria"> {categoria} </p>
                </div>
                <div className="caixaDeTextoPublicacao">
                    <p className="publicado">Descrição:</p>
                    <p id="inserirDescrição"> {descricao} </p>
                </div>
                <div className="botoesExcluirEditarPlay">
                    <button className="botaoPesquisar" id={id}>
                        <img src={apagarPost} style={{ width: "22px" }} alt=""/>
                    </button>
                    <button className="botaoPesquisar" id={id} >
                        <img src={editarPost} style={{ width: "22px" }} alt=""/>
                    </button>
                    <div id="botaoYoutube">
                        <button className="botaoPesquisar" id={id}>
                            <a href={video} target="_blank" rel="noreferrer"><img src={playPost} style={{width: "22px"}} alt=""/></a>
                        </button>
                    </div>

                </div>

            </div>

        </li>
    )
}

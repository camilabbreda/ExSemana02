import LimparPesquisa from "../../Imagens/LimparPesquisa.png"
import logoPesquisa from "../../Imagens/logoPesquisa.png"
export default function Filter(){
   return(
<div className="pesquisaEPublicacoes" id="pesquisaEPublicacoes">
                            <div className="pesquisa">
                                <input
                                    type="text"
                                    id="inputPesquisa"
                                    placeholder="Digite um título para buscar..."
                                />
                                <button className="botaoPesquisar" id="filtrar">
                                    <img
                                        src={logoPesquisa}
                                        style={{ width: "18px" }}
                                        alt=""
                                    />
                                </button>
                                <button className="botaoPesquisar" id="limpar">
                                    <img
                                        src={LimparPesquisa}
                                        style={{ width: "22px" }}
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
   )
}
    
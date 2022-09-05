
import Summary from "../Summary/Summary"
import Filter from "../Filter/Filter"
import TipCard from "../TipCard/TipCard"

export default function MainContent() {

    return (
        <div>
            <div className="ladoEsquerdo">
                <div className="ladoEsquerdo">
                    {/* <!-- BLOCO PAINEL CATEGORIAS--> */}
                    <Summary />
                    {/* <!-- ====================/PAINEL CATEGORIAS============== --> */}
                    <div className="board">
                        {/* <!-- BLOCO PESQUISAR E PUBLICAÇÕES --> */}
                        <div className="quadroGeral">
                            {/* <!-- BLOCO PESQUISAR --> */}
                            <Filter />
                            <ul id="publicacoes" className="listaDePublicacoes">
                                <TipCard id="1" titulo="Oi" skill="Novo" categoria="SoftSkill" descricao="aaaaaaaaa" youtube="Link"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
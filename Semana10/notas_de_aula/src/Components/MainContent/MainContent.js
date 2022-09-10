
import Summary from "../Summary/Summary"
import Filter from "../Filter/Filter"
import TipCard from "../TipCard/TipCard"
import CardList from "../CardList/CardList"
import { useTips } from "../../Contexts/app-context"
import { useState } from "react"


export default function MainContent() {
    const { tipList } = useTips()
    const [filteredTip, setFilteredTip] = useState(tipList)

    let printedTips;

    if (filteredTip.length === tipList.length) {
        printedTips = tipList;
    } else if (filteredTip.length === 0) {
        printedTips = tipList
    } else {
        printedTips = filteredTip;
    }


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
                            <Filter filteredTips={filteredTip} setFilteredTip={setFilteredTip} />
                            <ul id="publicacoes" className="listaDePublicacoes">
                                <CardList>
                                    {printedTips.map((item) => {
                                        return (<TipCard
                                            key={item.id}
                                            id={item.id}
                                            titulo={item.titulo}
                                            linguagem={item.linguagem}
                                            categoria={item.categoria}
                                            descricao={item.descricao}
                                            youtube={item.youtube}
                                        />)
                                    })}
                                </CardList>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Summary from "../Summary/Summary"
import Filter from "../Filter/Filter"
import TipCard from "../TipCard/TipCard"
import CardList from "../CardList/CardList"


export default function MainContent({tipList}) {

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
                                <CardList>
                                {tipList.map((item)=>{return (<TipCard 
                                id={item.id}
                                titulo={item.titulo}
                                linguagem={item.linguagem} 
                                categoria={item.categoria} 
                                descricao={item.descricao}
                                youtube={item.youtube}
                                />)})}
                                </CardList>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import LimparPesquisa from "../../Imagens/LimparPesquisa.png"
import logoPesquisa from "../../Imagens/logoPesquisa.png"
import { useTipReducer } from "../../Reducers/app-reducer"
import { useTips } from "../../Contexts/app-context"

export default function Filter({filteredTips, setFilteredTip}) {
    const { tipList } = useTips()
    const [state, dispatch] = useTipReducer();
    const { filterValue } = state


    function filterTip(e) {
        e.preventDefault()
        const beforeFilter = tipList;
        setFilteredTip(()=>{tipList.filter((item) => item.titulo.toLowerCase().includes(filterValue))})
        console.log(filteredTips)
        console.log(tipList)
        return beforeFilter
    }

    function cleanFilter(beforeFilter, filteredTip, tipList) {
        filteredTip=""
        return tipList = beforeFilter
    }

    return (
        <div className="pesquisaEPublicacoes" id="pesquisaEPublicacoes">
            <div className="pesquisa">
                <input
                    value={filterValue}
                    onChange={(e) => {
                        dispatch({
                            type: 'setFilteredValue',
                            payload: e.target.value
                        })
                    }}
                    type="text"
                    id="inputPesquisa"
                    placeholder="Digite um título para buscar..."
                />
                <button className="botaoPesquisar" onClick={filterTip}>
                    <img

                        src={logoPesquisa}
                        style={{ width: "18px" }}
                        alt=""
                    />
                </button>
                <button className="botaoPesquisar" onClick={cleanFilter}>
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

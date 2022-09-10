import { useState } from "react"
// import { useTipReducer } from "../../Reducers/app-reducer"
import LivroLogo from "../../Imagens/LivroLogo.png"
import { useTips } from "../../Contexts/app-context"

export default function SideBar() {
    const {dispatch} = useTips()
    const [tip, setTip] = useState({
        id: Math.random(),
        titulo: "",
        linguagem: "",
        categoria: "",
        descricao: "",
        video: ""
    })

    // const [state, dispatch] = useTipReducer();
    // const { tipList } = state


    function handleCreateTip(e) {
        e.preventDefault()
        if ((tip.titulo === '') | (tip.linguagem === '') | (tip.descricao === '')) {
            alert("Os campos'Títilo', 'Linguagem' e  'Descrição' desevem ser preenchidos obrigatóriamente.")
        } else {
            dispatch({
                type: 'addTipToTipList',
                payload: tip,
            })
            alert("Sucesso! Dica cadastrada na barra do conhecimento!")
            setTip({
                id: Math.random(),
                titulo: "",
                linguagem: "",
                categoria: "",
                descricao: "",
                video: ""
            })
        }

    }



    function limparFormulario(e) {
        e.preventDefault()
        setTip({
            id: 1,
            titulo: "",
            linguagem: "",
            categoria: "",
            descricao: "",
            video: ""
        })
    }



    return (
        <div>
            <nav className="formulario" id="formulario">
                <div className="logo">
                    <div>
                        <img
                            src={LivroLogo}
                            style={{ height: '100px', width: 'auto' }}
                            alt="imagem de um livro"
                        />
                    </div>
                    <div className="textoDaLogo">
                        <div
                            style={{ marginTop: '10%', fontSize: '25px', color: 'rgb(90, 86, 86)' }}
                        >
                            DEVinKnowledge
                        </div>
                        <div style={{ color: "rgb(90, 86, 86)", fontSize: "18px" }}>
                            Learn, Code and Save
                        </div>
                    </div>
                </div>
                <form className="formularioPrincipal">
                    <div id="inputs">
                        <p className="tituloForm">Título*</p>
                        <input
                            value={tip.titulo}
                            onChange={(e) => { setTip({ ...tip, titulo: e.target.value }) }}
                            className="inserirValores"
                            placeholder="Digite um título"
                        />
                        <p className="tituloForm">Linguagem/Skill*</p>
                        <input
                            value={tip.linguagem}
                            onChange={(e) => { setTip({ ...tip, linguagem: e.target.value }) }}
                            className="inserirValores"
                            placeholder="Digite uma Linguagem ou Skill"
                        />
                        <p className="tituloForm">Categoria*</p>
                        <select
                            value={tip.categoria}
                            onChange={(e) => { setTip({ ...tip, categoria: e.target.value }) }}
                            className="inserirValoresSeleciona"
                        >
                            <option value="">Selecione uma Categoria</option>
                            {/* <!-- CATEGORIAS DO POST --> */}
                            <option value="SoftSkill">SoftSkill</option>
                            <option value="FrontEnd">FrontEnd</option>
                            <option value="FullStack">FullStack</option>
                            <option value="BackEnd">BackEnd</option>
                            {/* <!-- --------------------- --> */}
                        </select>
                        <p className="tituloForm">Descrição*</p>
                        <textarea
                            value={tip.descricao}
                            onChange={(e) => { setTip({ ...tip, descricao: e.target.value }) }}
                            className="descricaoPost"
                            cols="30"
                            rows="10"
                            placeholder="Ecreva aqui o detalhamento da sua dica"
                        ></textarea>
                        <p className="tituloForm">Vídeo do Youtube</p>
                        <input
                            value={tip.video}
                            onChange={(e) => { setTip({ ...tip, video: e.target.value }) }}
                            type="text"
                            name="linkYoutube"
                            id="linkYoutube"
                            className="inserirValores"
                            placeholder="https//suaurl.com"
                        />
                    </div>
                    <div>
                        <div className="botoesLimparSalvar">
                            <button onClick={limparFormulario} className="botaoLimpar">Limpar</button>
                            <button onClick={handleCreateTip} className="botaoSalvar">Salvar</button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    )
}


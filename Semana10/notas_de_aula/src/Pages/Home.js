import './index.css'
export default function Home() {
    return (
        <div>
            <div className="corpo">
                <nav className="formulario" id="formulario">
                    <div className="logo">
                        <div>
                            <img
                                src="../../../Semana 7/Imagens/LivroLogo.png"
                                style={{height: '100px', width: 'auto'}}
                                alt="imagem de um livro"
                            />
                        </div>
                        <div className="textoDaLogo">
                            <div
                                style={{marginTop: '10%', fontSize: '25px', color: 'rgb(90, 86, 86)'}}
                            >
                                DEVinKnowledge
                            </div>
                            <div style={{color: "rgb(90, 86, 86)", fontSize: "18px"}}>
                                Learn, Code and Save
                            </div>
                        </div>
                    </div>
                    <form className="formularioPrincipal">
                        <div id="inputs">
                            <p className="tituloForm">Título*</p>
                            <input
                                type="text"
                                name="titulo"
                                id="titulo"
                                className="inserirValores"
                                minLength="8"
                                required
                                maxLength="64"
                                
                                placeholder="Digite um título"
                            />
                            <p className="tituloForm">Linguagem/Skill*</p>
                            <input
                                type="text"
                                name="linguagem/skill"
                                id="linguemSkill"
                                className="inserirValores"
                                minLength="4"
                                required
                                maxLength="16"
                                placeholder="Digite uma Linguagem ou Skill"
                            />
                            <p className="tituloForm">Categoria*</p>
                            <select
                                required
                                name="categoria"
                                id="categoria"
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
                                name="post"
                                className="descricaoPost"
                                id="descricaoDoPost"
                                cols="30"
                                rows="10"
                                minLength="32"
                                required
                                maxLength="512"
                               
                                placeholder="Ecreva aqui o detalhamento da sua dica"
                            ></textarea>
                            <p className="tituloForm">Vídeo do Youtube</p>
                            <input
                                type="text"
                                name="linkYoutube"
                                id="linkYoutube"
                                className="inserirValores"
                                placeholder="ttps//suaurl.com"
                            />
                        </div>
                        <div>
                            <div className="botoesLimparSalvar">
                                <button id="botaoLimpar" className="botaoLimpar">Limpar</button>
                                <button id="botaoSalvar" className="botaoSalvar">Salvar</button>
                            </div>
                        </div>
                    </form>
                </nav>
                <div className="ladoEsquerdo">
                    <div className="ladoEsquerdo">
                        {/* <!-- BLOCO PAINEL CATEGORIAS--> */}
                        <ul className="placar" id="placar"></ul>
                        {/* <!-- ====================/PAINEL CATEGORIAS============== --> */}
                        <div className="board">
                            {/* <!-- BLOCO PESQUISAR E PUBLICAÇÕES --> */}
                            <div className="quadroGeral">
                                {/* <!-- BLOCO PESQUISAR --> */}
                                <div className="pesquisaEPublicacoes" id="pesquisaEPublicacoes">
                                    <div className="pesquisa">
                                        <input
                                            type="text"
                                            id="inputPesquisa"
                                            placeholder="Digite um título para buscar..."
                                        />
                                        <button className="botaoPesquisar" id="filtrar">
                                            <img
                                                src="../../../../Semana 7/Imagens/logoPesquisa.png"
                                                style={{width: "18px"}}
                                                alt=""
                                            />
                                        </button>
                                        <button className="botaoPesquisar" id="limpar">
                                            <img
                                                src="../../../../Semana 7/Imagens/LimparPesquisa.png"
                                                style={{width: "22px"}}
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </div>
                                <ul id="publicacoes" className="listaDePublicacoes"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
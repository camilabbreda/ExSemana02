export default function Card({ fotoPerfil, titulo, nickName, imagem, valorEtherium, valorReais, tempo="8 anos" }) {

    return (
        <div>
            <header className="head">
                <div>
                    <img className="imagem" src={fotoPerfil} alt="Imagem do Produto" />
                </div>
                <div className="tituloNickname">
                    <h1 className="titulo">{titulo}</h1>
                    <p className="nickname">{nickName}</p>
                </div>
            </header>
            <div >
                <img className="fotoProduto" src={imagem} />
            </div>
            <footer className="footer">
            <div>
                <p>{tempo}</p>
            </div>
            <div className="valores">
                <p>{valorReais}</p>
                <h2>{valorEtherium} ETH</h2>
            </div>
            </footer>

        </div>
    )
}
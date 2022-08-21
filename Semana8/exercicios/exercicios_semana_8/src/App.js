import S08ex03 from "./Components/s08ex03";
// import './App.css';
import "./Components/s08ex03.css";
import PrimeiroProjetoReact from "./Components/s08ex03";
import Estilo from "./Components/s08ex04";
import Soma from "./Components/s08ex05";
import Botao from "./Components/s08ex06";
import Post from "./Components/s08ex07";
import Contato from "./Components/s08ex08";
import Produto from "./Components/s08ex09";
import Tabela from "./Components/s08ex11";
import Pokemon from "./Components/s08ex12";

const contatos = [
  {
    id: 1,
    photo:
      "https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg",
    name: "Camila",
    description: "gosta de programar",
  },
  {
    id: 2,
    photo:
      "https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg",
    name: "Jaqueline",
    description: "Detona na programação!",
  },
  {
    id: 3,
    photo:
      "https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000",
    name: "Pedro",
    description: "Top da Programação!",
  },
  {
    id: 4,
  },
];

const produtos = [
  {
    idProduto: 1,
    photoProduto:
      "https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2020/12/celular-samsung-galaxy-a-02-s-32gb-dual-092012331057.jpg",
    nameProduto: "celular",
    priceProduto: "R$1100,00",
  },
  {
    idProduto: 2,
    photoProduto: "https://imgs.casasbahia.com.br/55011374/1xg.jpg?imwidth=292",
    nameProduto: "celular",
    priceProduto: "R$1300,00",
  },
  {
    idProduto: 3,
    photoProduto:
      "https://a-static.mlcdn.com.br/280x210/smartphone-motorola-moto-g22-128gb-azul-4g-octa-core-4gb-ram-65-cam-quadrupla-selfie-16mp/magazineluiza/234607100/42ae7ecbcf4f2552da3241e4da4416c5.jpg",
    nameProduto: "celular",
    priceProduto: "R$2100,00",
  },
  {
    idProduto: 4,
    photoProduto:
      "https://cf.shopee.com.br/file/48f4e9b50fc63c4edd45c6a6a973fef8",
    nameProduto: "celular",
    priceProduto: "R$5100,00",
  },
  {
    idProduto: 5,
    photoProduto:
      "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a72-128gb-6-7-samsung_475186.jpg",
    nameProduto: "celular",
    priceProduto: "R$1100,00",
  },
  {
    idProduto: 6,
    photoProduto:
      "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a72-128gb-6-7-samsung_475170.jpg",
    nameProduto: "celular",
    priceProduto: "R$4100,00",
  },
];

const tabela = [
  {
    idTabela: 1,
    name: "Joana",
    department: "Administrativo",
    hire: "10/01/2020",
  },
  {
    idTabela: 2,
    name: "Pedro",
    department: "Administrativo",
    hire: "11/06/2020",
  },
  {
    idTabela: 3,
    name: "Jaci",
    department: "Financeiro",
    hire: "15/12/1996",
  },
  {
    idTabela: 4,
    name: "Jaqueline",
    department: "Foundation",
    hire: "12/11/1990",
  },
];

const pokedex=[{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  idPokemon:"001",
  nomePokemon:"Bulbasaur",
  tipoPokemon:"Grass",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
  idPokemon:"002",
  nomePokemon:"Ivysaur",
  tipoPokemon:"Grass",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
  idPokemon:"003",
  nomePokemon:"Venusaur",
  tipoPokemon:"Grass",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  idPokemon:"004",
  nomePokemon:"Charmander",
  tipoPokemon:"Fire",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
  idPokemon:"005",
  nomePokemon:"Charmeleon",
  tipoPokemon:"Fire",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
  idPokemon:"006",
  nomePokemon:"Charizard",
  tipoPokemon:"Fire",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  idPokemon:"007",
  nomePokemon:"Squirtle",
  tipoPokemon:"Water",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
  idPokemon:"008",
  nomePokemon:"Wartortle",
  tipoPokemon:"Water",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
  idPokemon:"009",
  nomePokemon:"Blastoise",
  tipoPokemon:"Water",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
  idPokemon:"010",
  nomePokemon:"Caterpie",
  tipoPokemon:"Bug",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
  idPokemon:"011",
  nomePokemon:"Metapod",
  tipoPokemon:"Bug",
},{
  imagemPokemon:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
  idPokemon:"012",
  nomePokemon:"Butterfree",
  tipoPokemon:"Bug",
},
]

function App() {
  return (
    <div>
      <div>
        <p style={{ textAlign: "center" }}>Exercício 03</p>
        <PrimeiroProjetoReact
          titulo="Meu primeiro projeto React"
          texto="Criar um projeto React é muito fácil <3"
        />
      </div>

      <div>
        <p style={{ textAlign: "center" }}>Exercício 04</p>
        <Estilo cor="green" />
      </div>
      <div>
        <p style={{ textAlign: "center" }}>Exercício 05</p>
        <Soma numero1={2} numero2={5} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ textAlign: "center" }}>Exercício 06</p>
        <Botao
          corDeFundo="pink"
          textoDoBotao="Eu sou um botão estilizado com JSX"
        />
      </div>
      <div>
        <p style={{ textAlign: "center" }}>Exercício 07</p>
        <Post
          fotoDePerfil="https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
          nomeDoUsuario="Camila Breda"
          horaPublicacao="7m"
          descricao="Meu primeiro Post React"
          fotoDaPublicacao="https://play-lh.googleusercontent.com/Ew7HkAyuZeKrb93Cjhay-oUm5iJFA808RcRu_9ys2zqbZHPq3yceN_kL6Wo5Yb1DcCEC"
          numeroDeComentarios={10}
          curtidoPor="Rosana"
        />
      </div>
      <div style={{ borderStyle: "solid", borderWidth: "2px" }}>
        <p style={{ textAlign: "center" }}>Exercício 08</p>
        {contatos.map((contato) => {
          return (
            <Contato
              key={contato.id}
              photo={contato.photo}
              name={contato.name}
              description={contato.description}
            />
          );
        })}
      </div>
      <p style={{ textAlign: "center" }}>Exercício 09</p>
      <div className="produto">
        {produtos.map((produto) => (
          <Produto
            key={produto.idProduto}
            photoProduto={produto.photoProduto}
            nameProduto={produto.nameProduto}
            priceProduto={produto.priceProduto}
          />
        ))}
      </div>
      <div>
        <p style={{ textAlign: "center" }}>Exercício 10</p>
        <Post
          fotoDePerfil="https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
          nomeDoUsuario="Camila Breda"
          horaPublicacao="7m"
          descricao="Meu primeiro Post React"
          fotoDaPublicacao="https://play-lh.googleusercontent.com/Ew7HkAyuZeKrb93Cjhay-oUm5iJFA808RcRu_9ys2zqbZHPq3yceN_kL6Wo5Yb1DcCEC"
          numeroDeComentarios={0}
          curtidoPor="Rosana"
        />
        <Post
          fotoDePerfil="https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
          nomeDoUsuario="Camila Breda"
          horaPublicacao="7m"
          descricao="Meu primeiro Post React"
          fotoDaPublicacao="https://play-lh.googleusercontent.com/Ew7HkAyuZeKrb93Cjhay-oUm5iJFA808RcRu_9ys2zqbZHPq3yceN_kL6Wo5Yb1DcCEC"
          numeroDeComentarios={20}
          curtidoPor="Rosana"
        />
      </div>
      <div className="tabela">
        <p style={{ textAlign: "center" }}>Exercício 11</p>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Departamento</th>
              <th>Admissão</th>
            </tr>
          </thead>

          {tabela.map((funcionario) => (
            <Tabela
              Key={funcionario.idTabela}
              name={funcionario.name}
              department={funcionario.department}
              hire={funcionario.hire}
            />
          ))}
        </table>
      </div>
        <p >Exercício 12</p>
      <div className="produto">
        {pokedex.map((pokemon)=>(
          <Pokemon
          imagemPokemon={pokemon.imagemPokemon}
          idPokemon={pokemon.idPokemon}
          nomePokemon={pokemon.nomePokemon}
          tipoPokemon={pokemon.tipoPokemon}
          />
        ))}
      </div>

    </div>
  );
}

export default App;

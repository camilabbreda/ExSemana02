export default function Login() {
    return (
        <div className="row " style={{marginTop:"200px"}} >
            <div className="col-md-5" ></div>
            <form className="col-md-2">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Digite aqui seu e-mail..." id="inputEmail4" style={{marginBottom:"40px"}}/>
                </div>
                <div className="col-md-12">
                    <label for="inputPassword4" className="form-label">Senha</label>
                    <input type="password" className="form-control" placeholder="Digite aqui sua senha..." id="inputPassword4" style={{marginBottom:"40px"}} />
                </div>
                <button type="submit" className="btn btn-success col-md-12" >Entrar</button>
            </form>
            <div className="col-md-5" ></div>
        </div>
    )
}

//redireciona para Mapa
//Não é necessário guardar as informações, apenas valide se o campo de e-mail
//recebeu um e-mail verdadeiro, e se o campo de senha possui 8 ou mais caracteres
//com números e letras.

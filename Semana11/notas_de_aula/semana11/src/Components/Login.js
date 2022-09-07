import { useState } from "react"
export default function Login (){

    const [login, setLogin]= useState({email:"", password:""})

    function Logar(e){
        e.preventDefault()
        alert("usuário logado")
    }

    return(
        <form onSubmit= {Logar}>
            <label>E-mail:</label>
            <input type="email" required value= {login.email} onChange={(e)=>{setLogin({...login, email: e.target.value})}}/>
            <label>Senha:</label>
            <input type="password" minLength={8} required value= {login.password} onChange={(e)=>{setLogin({...login, password: e.target.value})}}/>
            <button type="submit" >Entrar</button>
        </form>
    )
}
// react-router-dom
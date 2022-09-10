import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login (){

    const [login, setLogin]= useState({email:"", password:""})
    const navigate = useNavigate()
    function Logar(e){
        e.preventDefault()
        alert("usuário logado")
        navigate("/home")
        
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

// export default function () {
//     return (<>
//         <button type="button" className="btn btn-primary btn-lg float-right" >Novo usuário</button>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Nome</th>
//                     <th scope="col">E-mail</th>
//                     <th scope="col">Idade</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <th scope="row">1</th>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                 </tr>
//                 <tr>
//                     <th scope="row">2</th>
//                     <td>Jacob</td>
//                     <td>Thornton</td>
//                     <td>@fat</td>
//                 </tr>
//                 <tr>
//                     <th scope="row">3</th>
//                     <td colspan="2">Larry the Bird</td>
//                     <td>@twitter</td>
//                 </tr>
//             </tbody>
//         </table>
//     </>
//     )
// }


// react-router-dom
//codepen
//https://getbootstrap.com/docs/5.0/forms/layout/
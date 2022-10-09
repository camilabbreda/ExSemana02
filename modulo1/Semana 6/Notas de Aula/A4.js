// let botao = document.getElementById("botao01")

// botao.addEventListener("click", function(){
//     let input = document.getElementById("cep")
//         const oReq = new XMLHttpRequest();
//     oReq.onload = () => {
//         console.log(oReq.response)
//         let div = document.querySelector("div")
//         div.innerHTML = oReq.response.logradouro + "<br>"
//         div.innerHTML += oReq.response.bairro + "<br>"
//         div.innerHTML += oReq.response.localidade + "<br>"
//         div.innerHTML += oReq.response.uf
// }
//     oReq.onerror = (err) => console.error(err)
//     oReq.open("GET", `https://viacep.com.br/ws/${input.value}/json/`);

//     oReq.responseType = "json";

// oReq.send();
// })
// ===========================================================
// let botao = document.getElementById("botao01")

// botao.addEventListener("click", function(){
//     let input = document.getElementById("cep").value
//     var option = {
//         method: "GET",
//         headers:{"content-type" : "application/json"}
//     } 

//     fetch(`https://viacep.com.br/ws/${input}/json/`,option)
//     .then((response)=>{
//         return response.json()
//     }).then ((response)=>{
//         console.log(response)
//         let div = document.querySelector("div")
//         div.innerHTML = response.logradouro + "<br>"
//         div.innerHTML += response.bairro + "<br>"
//         div.innerHTML += response.localidade + "<br>"
//         div.innerHTML += response.uf
//     })
//     .catch((err)=>{
//         console.error(err)
//     })
// })

// ====================================================================

var option = {
            method:"GET",
            }

fetch("https://zoo-animal-api.herokuapp.com/animals/rand", option)
    .then((response)=>{
        return response.json();
    }).then ((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.error(err)
    });


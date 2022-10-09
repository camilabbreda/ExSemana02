import React, { useState, useEffect, useRef } from 'react';

export default function Exercise06() {
    const [contatos, setContatos] = useState([{
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
    }])
    function addMessage() {
        setContatos([...contatos, {
            id: 1,
            photo:
                "https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg",
            name: "Camila",
            description: "gosta de programar",
        }, {
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
        }])
    }

    return (
        <>
            {contatos.map(contato => (<div style={{ display: "flex", flexDirection: "row", borderColor: "black" }}>

                <img style={{ borderRadius: "50%", width: "10%", height: "100px" }} key={contato.id} src={contato.photo} />
                <div>
                    <h1 style={{ marginTop: "20px", marginLeft: "20px", marginBottom: "0px" }} key={contato.id}> {contato.name} </h1>
                    <p style={{ marginTop: "0px", marginLeft: "20px" }} key={contato.id}> {contato.description} </p>
                </div>
            </div>))}
            <button onClick={addMessage}>Nova Mensagem</button>
        </>
    )
}
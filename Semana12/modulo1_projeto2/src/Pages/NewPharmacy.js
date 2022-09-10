export default function NewPharmacy (){
    return(
        <div>
            NewPharmacy
        </div>
    )
}

// Ler documento
// Razão social (obrigatório)
// CNPJ (obrigatório)
// Nome Fantasia (obrigatório)
// E-mail (obrigatório)
// Telefone (opcional)
// Celular (obrigatório)
// Endereço
    // CEP (obrigatório)
    // Logradouro/Endereço (obrigatório)
    // Número (obrigatório)
    // Bairro (obrigatório)
    // Cidade (obrigatório)
    // Estado (obrigatório)
    // Complemento (opcional)
    // Geolocalização
    // Latitude (obrigatório)
    // Longitude (obrigatório)

// Os dados de endereço devem ser pré-preenchidos através da consulta do CEP pela 
// API ViaCEP do IBGE Brasil. Preencher com os campos disponíveis da 
// API (logradouro, bairro, cidade e etc) e solicitar ao usuário os campos 
// extras (número, complemento e etc)
// Os campos obrigatórios e opcionais devem ser validados no método onSubmit.
// Ao cadastrar uma nova farmácia, mostrar uma mensagem de feedback de empresa 
// cadastrada com sucesso. Dica: Utilize o método onSubmit com Try/Catch.
// Salve os dados em localStorage ou utilize JSON-Server para simular uma API.
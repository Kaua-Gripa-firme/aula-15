
let pokemon = prompt("Escolha um pokémon: 1) Bulbasauro 2) Squirtle 3) Charmander")
let mensagem

switch (pokemon) {
    case "Bulbasauro":
        mensagem = "Pokémon tipo Planta"
        break
    case "Squirtle":
        mensagem = "Pokémon tipo Água"
        break
    case "Charmander":
        mensagem = "Pokémon tipo Fogo"
        break
    default:
        mensagem = "Pokémon não encontrado"
}

console.log(mensagem)

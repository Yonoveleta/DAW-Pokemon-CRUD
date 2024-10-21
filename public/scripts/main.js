window.onload = (event) => {

    pokemonList = document.getElementById("pokemon-list")

    getPokemons().forEach(pokemon => {
        pokemonHTML = getPokemonHTML(pokemon)
        pokemonList.appendChild(pokemonHTML)
    })

    function getPokemonHTML(pokemon) {
        pokemonContainer = document.createElement("div")
        pokemonContainer.classList.add("pokemonContainer")

        // pokemon name
        pokemonName = document.createElement("h3")
        pokemonName.textContent = pokemon.name

        // pokemon types
        typesContainer = document.createElement("div")
        typesContainer.classList.add("typesContainer")
        typeText = document.createElement("h4")
        typeText.textContent = "Type"
        typesContainer.appendChild(typeText)
        let types = document.createElement("div")
        types.classList.add("types")

        pokemon.types.forEach(type => {
            typeHTML = document.createElement("p")
            typeHTML.textContent = type
            types.appendChild(typeHTML)
        })

        typesContainer.appendChild(types)

        pokemonContainer.appendChild(pokemonName)
        pokemonContainer.appendChild(typesContainer)
        return pokemonContainer
    }

}

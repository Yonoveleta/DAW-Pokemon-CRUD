const URL = window.location.href

async function deletePokemon(pokemonid) {
    const response = await fetch(`${URL}/${pokemonid}`, {
        method: "DELETE",
    })
    if (response.ok) {
        window.location.href = "/pokemon"
    }
}


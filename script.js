const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

let pokemon = [];

async function init() {
    await savePokemon();
}

async function loadPokemon() {
    let response = await fetch(BASE_URL);
    return await response.json();
}

async function savePokemon() {
    pokemon = await loadPokemon();
    console.log(pokemon)
}

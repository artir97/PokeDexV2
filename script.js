// URLS
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=386';
let pokemonUrls = [];

// variables
let pokeApiResult;
let pokemon = [];

async function init() {
    await loadPokeApi();
    await loadPokemonUrls();
    await loadPokemon();
    await renderAll();
}

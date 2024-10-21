// URLS
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=386';
let pokemonUrls = [];

// variables
let pokeApiResult;
let pokemon = [];

async function init() {
    await loadPokeApi();
    await loadPokemonUrls();
    await loadPokemon();
    await renderAll();

    console.log(pokemon[8].stats);
    console.log(pokemon[8].stats[0].base_stat);
}

function openPokemonCardBig(i) {
    renderPokemonCardBig(i)
}
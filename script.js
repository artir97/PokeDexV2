// URLS
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0';
let pokemonUrls = [];

// variables
let pokeApiResult;
let pokemon = [];
let pokemonSpecies = [];

async function init() {
    await loadPokeApi();
    await loadPokemonUrls();
    await loadPokemon();
    await renderAll();
}

async function openPokemonCardBig(i) {
    await renderPokemonCardBig(i)
}

function getTotalStats(pokemonIndex) {
    let totalStats = 0;
    for (let i = 0; i < pokemon[pokemonIndex].stats.length; i++) {
        totalStats += pokemon[pokemonIndex].stats[i].base_stat;
    }
    return totalStats;
}
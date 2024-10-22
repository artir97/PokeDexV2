// URLS
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0';
let pokemonUrls = [];

// variables
let pokemonCount = 10;
let pokeApiResult;
let pokemon = [];
let pokemonSpecies = [];
let types = [];

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

async function showPreviousPokemon(i) {
    await renderPokemonCardBig(i);
}

async function showNextPokemon(i) {
    if(i === pokemon.length) {
        let nextPokemon = await loadNextPokemon(i);
        pokemon.push(nextPokemon);
        await renderPokemonCardBig(pokemon.length - 1);
    } else {
        await renderPokemonCardBig(i);
    }
}

function getEnglishPokedexEntry(entries) {
    // Find the first flavor text entry in English
    const entry = entries.find(e => e.language.name === 'en');
    return entry ? entry.flavor_text : 'No English entry available';
}

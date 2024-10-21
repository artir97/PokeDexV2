
async function loadPokeApi() {
    let response = await fetch(BASE_URL);
    pokeApiResult = await response.json();
}

async function loadPokemonUrls(){
    for (let i = 0; i < pokeApiResult.results.length; i++) {
        pokemonUrls[i] = pokeApiResult.results[i].url;
    }
}

async function loadPokemon() {
    for (let i = 0; i < 30; i++) {
        let response1 = await fetch(pokemonUrls[i]);
        let response2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + (i+1) + '/');
        pokemon[i] = await response1.json();
        pokemonSpecies[i] = await response2.json();
    }
}

async function loadPreviousPokemon(i) {
    let response = await fetch(pokemonUrls[i-1]);
    return await response.json();
}

async function loadNextPokemon(i){
    let response = await fetch(pokemonUrls[i+1]);
    return await response.json();
}

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
    for (let i = 0; i < pokemonUrls.length; i++) {
        let response = await fetch(pokemonUrls[i]);
        pokemon[i] = await response.json();
    }
    console.log('pokemonArray', pokemon);
}
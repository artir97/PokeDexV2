
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
    for (let i = 0; i < pokemonCount; i++) {
        let response1 = await fetch(pokemonUrls[i]);
        let response2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + (i+1) + '/');
        pokemon[i] = await response1.json();
        pokemonSpecies[i] = await response2.json();
    }
}

async function loadMorePokemon(i){
    hideLoadMore();
    pokemonCount += 5;
    await loadPokemon();
    await renderPokemonCardsSmall();
    await renderPokemonCardBig(i);

    let smallCardContainer = document.getElementById('poke-cards-container');
    smallCardContainer.scrollTo({
        top: smallCardContainer.scrollHeight,
        behavior: 'smooth'
    });

}

async function loadPreviousPokemon(i) {
    let response = await fetch(pokemonUrls[i-1]);
    return await response.json();
}

async function loadNextPokemon(i){
    let response = await fetch(pokemonUrls[i+1]);
    let response2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + (i+1) + '/');
    pokemonSpecies[i] = await response2.json();
    return await response.json();
}

function hideLoadMore() {
    let loadMoreElement = document.getElementById('load-more');
    loadMoreElement.style.display = 'none';

    let loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block';
}

async function loadTypes() {

}

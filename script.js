
//URLS
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=90&offset=0'
let currentPokemonUrl;

// DOCUMENTS
let pokemon = [];
let currentPokemon;


async function init() {
    await savePokemon();
    await renderAll();
}


/*LOAD FUNCTIONS */
async function loadPokemon() {
    let response = await fetch(BASE_URL);
    return await response.json();
}

async function savePokemon() {
    pokemon = await loadPokemon();
    console.log('pokemon ', pokemon);
    console.log('pokemon i 6', pokemon.results[6]);
}

async function getCurrentPokemonUrl() {
    currentPokemonUrl = await pokemon.results[0].url;
    console.log('current url', currentPokemonUrl);
}

async function getCurrentPokemon() {
    let response = await fetch(currentPokemonUrl);
    console.log('res',response);
    currentPokemon = await response.json();
}














/*RENDER FUNCTIONS*/
async function renderAll() {
    await renderPokemonCardsSmall();
}

async function renderPokemonCardsSmall() {
    await getCurrentPokemonUrl();
    await getCurrentPokemon();
    let pokeCardsSmallContainer = document.getElementById('poke-cards-container');

    for (let i = 0; i < pokemon.results.length; i++) {
        console.log(await getCurrentPokemonUrl(i));
        pokeCardsSmallContainer.innerHTML += pokeCardSmallTemplate(i);
    }
}

















/*TEMPLATES*/
function pokeCardSmallTemplate(i) {
    return (
        `
        <div class="poke-card-small" id="poke-card-small-${i}">
            <img src="${currentPokemon.sprites.front_default}" alt="">
            <div>${pokemon.results[i].name}</div>
        </div>
        `
    )
}

//<img src="${currentPokemon.sprites.front_default}" alt=""/>
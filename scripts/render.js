
async function renderAll() {
    await renderPokemonCardsSmall();
    await renderPokemonCardBig(8)
}

async function renderPokemonCardsSmall() {
    let pokeCardsSmallContainer = document.getElementById('poke-cards-container');

    for (let i = 0; i < pokemon.length; i++) {
        pokeCardsSmallContainer.innerHTML += pokeCardSmallTemplate(i);
    }
}

async function renderPokemonCardBig(i) {
    let pokemonCardBigContainer = document.getElementById('poke-card-big');
    pokemonCardBigContainer.innerHTML = pokeCardBigTemplate(i);
}
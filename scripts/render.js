
async function renderAll() {
    await renderPokemonCardsSmall();
}

async function renderPokemonCardsSmall() {
    let pokeCardsSmallContainer = document.getElementById('poke-cards-container');

    for (let i = 0; i < pokemon.length; i++) {
        pokeCardsSmallContainer.innerHTML += pokeCardSmallTemplate(i);
    }
}
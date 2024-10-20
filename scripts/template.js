function pokeCardSmallTemplate(i) {
    return (
        `
        <div class="poke-card-small" id="poke-card-small-${i}">
            <img src="${pokemon[i].sprites.front_default}" alt="">
            <div>${pokemon[i].name}</div>
        </div>
        `
    )
}
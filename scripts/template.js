function pokeCardSmallTemplate(i) {
    return (
        `
        <div onclick="openPokemonCardBig(${i})" class="poke-card-small" id="poke-card-small-${i}">
            <img src="${pokemon[i].sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
            <div class="poke-card-small-info">
                <div class="poke-id">N°${pokemon[i].id}</div>
                <div class="poke-card-small-pokemon-name">
                    ${pokemon[i].name.charAt(0).toUpperCase() + pokemon[i].name.substring(1)}
                </div>  
                <div class="types-container">
                    ${pokeCardSmallTypesTemplate(i)}
                </div>
            </div>
   
        </div>
        `
    )
}

function pokeCardSmallTypesTemplate(i) {
    if(pokemon[i].types.length === 1){
        return (
            `
            <div class="${pokemon[i].types[0].type.name}">
                ${pokemon[i].types[0].type.name.toUpperCase()}
            </div>
            `
        )
    } else {
        return (
            `
            <div class="${pokemon[i].types[0].type.name}">
                ${pokemon[i].types[0].type.name.toUpperCase()}
            </div>
            <div class="${pokemon[i].types[1].type.name}">
                ${pokemon[i].types[1].type.name.toUpperCase()}
            </div>
            `
        )
    }
}

async function pokeCardBigTemplate(i) {
    return (
        `
        <div class="poke-card-big-poke-info">
            <img src="${pokemon[i].sprites.front_default}" alt="Official Artwork">

            <div class="pokedex-entry-text">#${pokemon[i].id}</div>
            <div>${pokemon[i].name.charAt(0).toUpperCase() + pokemon[i].name.substring(1)}</div>
            <div class="pokedex-entry-text">${pokemonSpecies[i].genera[7].genus}</div>
            <div class="types-container">
                ${pokeCardSmallTypesTemplate(i)}
            </div>
            <div>
                <div>Pokedex Entry</div>
                <div class="pokedex-entry-text">${getEnglishPokedexEntry(pokemonSpecies[i].flavor_text_entries)}</div>
            </div>
            <div class="poke-info-container">
                ${pokeCardBigAbilityTemplate(i)}
                ${pokeCardBigInfoTemplate(i)}
            </div>
            <div>
                <div class="info-heading">STATS</div>
                <div class="stats-container" style="text-align: center">
                    <div>
                        <div>HP</div>
                        <div>${pokemon[i].stats[0].base_stat}</div>
                    </div>
                    <div>
                        <div>ATK</div>
                        <div>${pokemon[i].stats[1].base_stat}</div>
                    </div>
                    <div>
                        <div>DEF</div>
                        <div>${pokemon[i].stats[2].base_stat}</div>
                    </div>
                    <div>
                        <div>SpA</div>
                        <div>${pokemon[i].stats[3].base_stat}</div>
                    </div>
                    <div>
                        <div>SpD</div>
                        <div>${pokemon[i].stats[4].base_stat}</div>
                    </div>
                    <div>
                        <div>SPD</div>
                        <div>${pokemon[i].stats[5].base_stat}</div>
                    </div>
                    <div>
                        <div>TOT</div>
                        <div>${getTotalStats(i)}</div>
                    </div>
                </div>
            </div>
            <div style="width: 100%">
                 ${await getPreviousAndNextPokemon(i)}
            </div>
        </div>
        `
    )
}

function pokeCardBigAbilityTemplate(i) {
    if(pokemon[i].abilities.length === 1) {
        return (
            `
        <div style="text-align: center">Abilites</div>
            <div class="abilities-container">
            <div class="poke-info-div">${pokemon[i].abilities[0].ability.name}</div>
        </div>
        `
        )
    } else {
        return (
            `
        <div style="text-align: center">Abilites</div>
            <div class="abilities-container">
            <div class="poke-info-div">${pokemon[i].abilities[0].ability.name}</div>
            <div class="poke-info-div">${pokemon[i].abilities[1].ability.name}</div>
        </div>
        `
        )
    }

}

function pokeCardBigInfoTemplate(i) {
    return (
        `
           <div class="poke-info-box">
                <div>
                  <div class="info-heading">HEIGHT</div>
                  <div class="poke-info-div">${getHeightPokemon(i)}</div>
                </div>
                <div>
                  <div class="info-heading">WEIGHT</div>
                  <div class="poke-info-div">${getWeightPokemon(i)}</div>
                </div>
           </div>
           <div class="poke-info-box">    
                <div>
                  <div class="info-heading">WEAKNESSES</div>
                  <div class="poke-info-div">
                    <div>weakness ph</div>
                  </div>
                </div>
                <div>
                  <div class="info-heading">BASE EXP</div>
                  <div class="poke-info-div">${pokemon[i].base_experience}</div>
                </div>
           </div>
        `
    )
}

function getHeightPokemon(i) {
    return (pokemon[i].height / 10).toFixed(2) + 'm';
}

function getWeightPokemon(i) {
    return (pokemon[i].weight / 10).toFixed(2) + 'kg';
}

async function getPreviousAndNextPokemon(i) {

    if(pokemon[i-1] !== undefined && pokemon[i+1] !== undefined ){
        return (
            `
        <div class="previous-next-container">
            <div onclick="showPreviousPokemon(${i-1})" class="previous-container">
                <img class="arrow-img" style="rotate: 180deg" src="../assets/icon/arrow.png" alt="picture of arrow">
                <img src="${pokemon[i - 1].sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
            </div>
            <div class="vertical-rule"></div>
            <div onclick="showNextPokemon(${i+1})" class="next-container">
                <img src="${pokemon[i + 1].sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
                <img class="arrow-img" src="../assets/icon/arrow.png" alt="picture of arrow">
            </div>
        </div>
        `
        )
    } else if (pokemon[i - 1] === undefined && pokemon[i].id === 1) {
        return (
            `
            <div class="previous-next-container">
                <div onclick="showNextPokemon(${i+1})" class="next-container">
                <img src="${pokemon[i + 1].sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
                <img class="arrow-img" src="../assets/icon/arrow.png" alt="picture of arrow">
            </div>
            `
        )
    } else if (pokemon[i-1] === undefined || pokemon[i+1] === undefined) {
        let nextPokemon = await loadNextPokemon(i);
        let previousPokemon = await loadPreviousPokemon(i);
        return (
            `
            <div class="previous-next-container">
                <div onclick="showPreviousPokemon(${i-1})" class="previous-container">
                    <img class="arrow-img" style="rotate: 180deg" src="../assets/icon/arrow.png" alt="picture of arrow">
                    <img src="${previousPokemon.sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
                </div>
  
                <div id="load-more" onclick="loadMorePokemon(${i})" class="next-container">
                    LOAD MORE
                </div>
             
                <svg id="loading-spinner" style="display: none" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" fill="red" stroke="black" stroke-width="2"/>
                    <path d="M 1 24 A 23 23 0 0 0 47 24 Z" fill="white" stroke="black" stroke-width="2"/>
                    <line x1="1" y1="24" x2="47" y2="24" stroke="black" stroke-width="3"/>
                    <circle cx="24" cy="24" r="8" fill="white" stroke="black" stroke-width="3"/>
        
                    <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 0 0"
                            to="360 0 0"
                            dur="1s"
                            repeatCount="indefinite"/>
                </svg>
            </div>
            `
        )

    }
}
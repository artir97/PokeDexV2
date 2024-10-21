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

function pokeCardBigTemplate(i) {
    return (
        `
        <div class="poke-card-big-poke-info">
            <img src="${pokemon[i].sprites.front_default}" alt="" srcset="">
            <div>#${pokemon[i].id}</div>
            <div>${pokemon[i].name.charAt(0).toUpperCase() + pokemon[i].name.substring(1)}</div>
            <div>placeholder species</div>
            <div class="types-container">
                ${pokeCardSmallTypesTemplate(i)}
            </div>
            <div>
                <div>Pokedex Entry</div>
                <div>placeholder entry</div>
            </div>
            <div class="poke-info-container">
                <div style="text-align: center">Abilites</div>
                <div class="abilities-container">
                    <div class="poke-info-div">ability-1</div>
                    <div class="poke-info-div">ability-2</div>
                </div>
                <div class="poke-info-box">
                    <div>
                      <div class="info-heading">HEIGHT</div>
                      <div class="poke-info-div">${pokemon[i].height + '0' + 'cm'}</div>
                    </div>
                    <div>
                      <div class="info-heading">WEIGHT</div>
                      <div class="poke-info-div">${pokemon[i].weight + '00' + 'g'}</div>
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
            <div>
                <div>EVOLUTION</div>
                <div class="evolution-container" >
                    <div>
                        <img src="${pokemon[6].sprites.front_default}" alt="image of pokemon ${pokemon[6].name}">
                    </div>
                    <div>lvl</div>
                    <div>
                        <img src="${pokemon[7].sprites.front_default}" alt="image of pokemon ${pokemon[7].name}">
                    </div>
                    <div>lvl</div>
                    <div>
                        <img src="${pokemon[8].sprites.front_default}" alt="image of pokemon ${pokemon[8].name}">
                    </div>
                </div>
            </div>
            <div>
                <div>prev and next</div>
                <div>
                    <img src="${pokemon[i-1].sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
                    <img src="${pokemon[i+1].sprites.front_default}" alt="image of pokemon ${pokemon[i].name}">
                </div>
            </div>
        </div>
        `
    )
}

function getTotalStats(pokemonIndex) {
    let totalStats = 0;
    for (let i = 0; i < pokemon[pokemonIndex].stats.length; i++) {
        totalStats += pokemon[pokemonIndex].stats[i].base_stat;
    }
    return totalStats;
}
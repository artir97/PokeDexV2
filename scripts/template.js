function pokeCardSmallTemplate(i) {
    return (
        `
        <div class="poke-card-small" id="poke-card-small-${i}">
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
            <div>
                <div style="text-align: center">Abilites</div>
                <div class="abilities-container">
                    <div class="poke-info-div">ability-1</div>
                    <div class="poke-info-div">ability-2</div>
                </div>
                <div>
                    <div>
                      <div>HEIGHT</div>
                      <div class="poke-info-div">${pokemon[i].height + '0' + 'cm'}</div>
                    </div>
                    <div>
                      <div>WEIGHT</div>
                      <div class="poke-info-div">${pokemon[i].weight + '00' + 'g'}</div>
                    </div>
                    
                    <div>
                      <div>WEAKNESSES</div>
                      <div class="poke-info-div">
                        <div>weakness placeholder</div>
                      </div>
                    </div>
                    <div>
                      <div>BASE EXP</div>
                      <div class="poke-info-div">${pokemon[i].base_experience}</div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
}
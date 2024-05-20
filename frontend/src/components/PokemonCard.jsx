import React from "react"

export default function Pokemon ({ pokemon }){
    //dette er noe som ble laget ikke implementert.
    
    return(
        <ul>
            <li>
                <h1>{pokemon.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                alt={pokemon.name} 
                className="photo"/>
                    <h3>Types</h3>
                        <ul>
                        {types.map(({ type }, index) => (
                            <li key={index}></li>
                                ))}
                        </ul>
                    <h3>Abilities</h3>
                        <ul>
                            {pokemon.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                                ))}
                        </ul>
                    <h3>Stats</h3>
                        <ul>
                            {pokemon.stats.map((stat, index) => (
                            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                                ))}
                        </ul>   
            </li>
        </ul>
    )
}
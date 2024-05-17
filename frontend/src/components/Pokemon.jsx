import React from "react";

export default function Pokemons({ pokemon }){
    return(
        <article>
            <ul>
                {pokemon.map((poke, index) =>(
                    <li key={index}>{poke.name}</li>
                ))}
            </ul>
        </article>
    )
}
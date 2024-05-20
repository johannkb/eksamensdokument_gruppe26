export default function Pokemons({ pokemon }){
    const slicedPokemon = pokemon.slice(0,9)

    return(
        <section>
            <ul className="pokemon">
                {slicedPokemon.map((poke, index) =>(
                    <li key={index}>{poke.name}</li>
                ))}
            </ul>
        </section>
    )
}
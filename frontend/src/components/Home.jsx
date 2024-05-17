import { useEffect, useState } from "react"
import Pokemons from "./Pokemon"
import Type from "./Type"


export default function Home({ pokemon, types }){
    return(
        <>
        <main>
            <h1>main pokemons</h1>
            <Pokemons pokemon={pokemon}/>
            <h2>types</h2>
            <Type types={types}/>
        </main>
        </>
    )

}
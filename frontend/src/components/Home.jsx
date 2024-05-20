import Pokemons from "./Pokemon"
import Type from "./Type"
import Header from "./Header"

export default function Home({ pokemon, types }){
    
    return(
        <>
        <Header />
        <main>
            <h1>main pokemons</h1>
            <Pokemons pokemon={pokemon}/>
            <h2>types</h2>
            <Type types={types}/>
        </main>
        </>
    )

}
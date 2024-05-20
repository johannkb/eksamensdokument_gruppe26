import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home.jsx'


function App() {
  const [pokemon, setPokemon] = useState([])
  const [types, setTypes] = useState([])
  
      useEffect(() =>{
          viewAllPokemon();
          viewAllTypes();
      },[])

      const viewAllPokemon = async () => {
          try{
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
              const data = await response.json()
              setPokemon(data.results)
          }catch{
              console.error("Det har skjedd en feil")
          }
      }
  
      const viewAllTypes = async () => {
          try{
              const response = await fetch(`https://pokeapi.co/api/v2/type/`)
              const data = await response.json()
              setTypes(data.results)
          }catch{
              console.error("Det har skjedd en feil")
          }
      }
  
      console.log(types, pokemon)

  return (
    <Home pokemon={pokemon} types={types}/>
  )
}

export default App

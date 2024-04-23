import { useState } from 'react'
import { useEffect } from 'react'
import fillPokemonArray from './data.js'
import './App.css'
import Card from './card.jsx'

function App() {
  const pokemonArray = fillPokemonArray();
  // setTimeout(function () { console.log(pokemonArray); }, 5000);
  console.log(pokemonArray);
  return (
    <>
      <h1>Memory Card Game</h1>
      <h2>Click each card only once!</h2>
      {pokemonArray.map((pokemon) => {
        return (
          <Card imgSrc={pokemon.img} key={pokemon.id} />
        )
      })}

    </>
  )

}

export default App

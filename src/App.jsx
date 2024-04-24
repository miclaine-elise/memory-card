import { useState } from 'react'
import { useEffect } from 'react'
import fillPokemonArray from './data.js'
import './App.css'
import Grid from './Grid.jsx'

function App() {
  console.log("reloading App");
  const pokemonArray = fillPokemonArray();
  const [clicked, setClickedPokemon] = useState([]);
  // setTimeout(function () { console.log(pokemonArray); }, 5000);
  const handleClick = (e) => {
    let clickedPokemon = pokemonArray.find((element) => element.id === e);
    clickedPokemon.clicked = true;
    console.log(clickedPokemon);
    const newClick = [e, ...clicked];
    setClickedPokemon(newClick);
  }
  return (
    <>
      <h1>Memory Card Game</h1>
      <h2>Click each card only once!</h2>
      <Grid array={pokemonArray} handleClick={handleClick} />

    </>
  )

}

export default App

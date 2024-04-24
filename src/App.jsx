import { useState } from 'react'
import { useEffect } from 'react'
import fillPokemonArray from './data.js'
import './App.css'
import Grid from './Grid.jsx'

function App() {
  console.log("reloading App");
  const allPokemonArray = fillPokemonArray();
  const displayedPokemonArray = shuffleArray(allPokemonArray);
  const [clicked, setClickedPokemon] = useState([]);
  useEffect(() => {
    shuffleArray(allPokemonArray);
  }, [clicked]);

  const handleClick = (e) => {
    let clickedPokemon = allPokemonArray.find((element) => element.id === e);
    clickedPokemon.clicked = true;
    console.log(clickedPokemon);
    const newClick = [e, ...clicked];
    console.log(newClick);
    setClickedPokemon(newClick);
  }
  // Fisher-Yates Sorting Algorithm
  function shuffleArray(array) {
    array.sort(() => 0.5 - Math.random());
    let shuffled = array.slice(0, 11);
    return shuffled;
  }
  return (
    <>
      <h1>Memory Card Game</h1>
      <h2>Click each card only once!</h2>
      <Grid array={displayedPokemonArray} handleClick={handleClick} />

    </>
  )

}

export default App

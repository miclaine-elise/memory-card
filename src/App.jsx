import { useState } from 'react'
import { useEffect } from 'react'
import fillPokemonArray from './data.js'
import './App.css'
import Grid from './Grid.jsx'
import Score from './Score.jsx'

function App() {
  const allPokemonArray = fillPokemonArray();
  const displayedPokemonArray = shuffleArray(allPokemonArray);
  const [clicked, setClickedPokemon] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    shuffleArray(allPokemonArray);
  }, [clicked, allPokemonArray]);

  const handleClick = (e) => {
    let clickedPokemon = allPokemonArray.find((element) => element.id === e);
    if (clickedPokemon.clicked === false) {
      clickedPokemon.clicked = true;
      const newClick = [e, ...clicked];
      setClickedPokemon(newClick);
      setCurrentScore(currentScore + 1);

    } else {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setClickedPokemon([]);
      allPokemonArray.forEach((pokemon) => pokemon.clicked = false);
    }
  }
  function shuffleArray(array) {
    array.sort(() => 0.5 - Math.random());
    let shuffled = array.slice(0, 12);
    return shuffled;
  }
  return (
    <div id="content">
      <div>
        <h1>CLICK EACH CARD ONLY ONCE</h1>
        <Score currentScore={currentScore} highScore={highScore} />
      </div>

      <Grid array={displayedPokemonArray} handleClick={handleClick} />

    </div>
  )

}

export default App

import { useEffect, useState } from 'react'
const pokemonArray = [];
class Pokemon {
    constructor(name, img, id) {
        this.name = name;
        this.img = img;
        this.id = id;
        this.clicked = false;
        this.addPokemon();
    }
    addPokemon() {
        pokemonArray.push(this);
        // console.log(pokemonArray)
    }
    clickedCard(clickedID) {
        const card = pokemonArray.find((obj) => obj.id === clickedID);
        card.clicked = true;
    }
}
export default function fillPokemonArray() {
    const [finalArray, setPokemonArray] = useState([]);
    useEffect(() => {
        async function fetchData() {
            console.log("fetchData is being called");
            try {
                for (let i = 1; i < 20; i++) {
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, { mode: 'cors' });
                    const pokemon = await response.json();
                    let newPokemon = new Pokemon(pokemon.name, pokemon.sprites.other.dream_world.front_default, pokemon.id);
                    // console.log(pokemon.name + i)
                }
                setPokemonArray(pokemonArray)
            } catch (err) {
                console.log(err);
                return null;
            }
        }
        fetchData();
    }, []);
    console.log(finalArray);
    return finalArray
}
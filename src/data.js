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
                    console.log(pokemon.name + i)
                    new Pokemon(pokemon.name, pokemon.sprites.front_default, pokemon.id);
                }
                // return pokemonArray
                // const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', { mode: 'cors' });
                // const pokemon = await response.json();
                // new Pokemon(pokemon.name, pokemon.sprites.front_default, pokemon.id);
                // console.log(pokemonArray)
                setPokemonArray(pokemonArray)
            } catch (err) {
                console.log(err);
                return null;
            }
        }
        fetchData();
    }, []);

    // console.table(finalArray)
    return finalArray
}
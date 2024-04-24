import Card from './card.jsx'
export default function Grid({ array, handleClick }) {
    console.log("Grid being called");
    return (
        <div className="grid">
            {array.map((pokemon) => {
                return (
                    <Card img={pokemon.img} key={pokemon.id} clicked={pokemon.clicked} onClick={() => handleClick(pokemon.id)} />
                )
            })}
        </div>
    )
}
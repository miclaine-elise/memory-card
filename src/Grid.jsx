import Card from './Card.jsx'
export default function Grid({ array, handleClick }) {
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
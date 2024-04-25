export default function Score({ currentScore, highScore }) {
    return (
        <div className="score">
            <h2>CURRENT SCORE: {currentScore}</h2>
            <h2>HIGH SCORE: {highScore}</h2>

        </div>

    )
}
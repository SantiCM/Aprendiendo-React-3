
// le desestructuramos el ganador y el resetearlo
export const GameOver = ( { winner, onRestart } ) => {
    return (
        <div id="game-over">

            <h2>Game Over!</h2>
            
            { /* Si el gandor y vamos a mostrar un <p>Con el ganador</p> */ }
            {winner && <p>{winner} won !</p>}

            { /* Si no exixte gandor mandamos un <p></p> que hubo empate  */ }
            {!winner && <p>It's s a draw</p>}

            { /* Un boton que al hacerle click lo reseteamos */ }
            <p><button onClick={onRestart}>Rematch</button></p>

        </div>

    )

}
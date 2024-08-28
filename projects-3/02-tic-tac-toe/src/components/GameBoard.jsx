
// le desustrucramos el onSelectSquare, board
export const GameBoard = ({onSelectSquare, board}) => {

    //const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // si tu estado es un objeto o un array 
    // actualizes ese etqadao de forma inmutable 
    // lo que significa que crees una copia del estado antiguo
    // es decir primero un nuevo objeto o un nuevo arrat
    // y luego cambiarlo
    /*const handleSelectSquare = (rowIndex, colIndex) => {
        
        setGameBoard((prevGame) => {
            
            // nuevo array en memoria
            const updated = [...prevGame.map((innerArray => [...innerArray]))]

            updated[rowIndex][colIndex] = activePlayerSymbol

            return updated
        
        })
        
        onSelectSquare()

    }*/


    return (

        <ol id="game-board">

            { /* Ese tablero le mapemaos todo que viene del row y rowIndex y rertonamos un <li></li> con key el rowIndex*/ }
            {board.map((row, rowIndex) => 
            
                <li key={rowIndex}>

                    <ol>
                        
                        { /* Al row le mapeamos el playerSymbol y el colIndex
                            con key de colINDEX
                        
                            */
                        }

                        {
                            
                            row.map((playerSymbol, colIndex) => 
                            
                            <li key={colIndex}
                            
                            >
                                { /* Mandamos un boton que el click viene de funcion anonima que recibe el row y el col
                                    y el disbled que es una propiedad que el boton si esta pero no puedes clickearlo
                                    el cual el simbolo tiene que ser diferente a null del array
                                */ }
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}
                            
                                >
                                    { /*  Mandamos el smbolo */ }
                                    {playerSymbol}

                                </button>
                            
                            </li>
                    
                        )}

                    </ol>

                </li>
            
            )}

        </ol>
    )

}
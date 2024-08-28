
// le madamos los turnos
export const Log = ( { turns } ) => {

    return (

        <ol id="log">

            { /* Los turnoss los mapeamos con uan fucnion  que da un 
                <li></li> con key={`${turn.square.row}${turn.square.col}`}
                osea el turno de columna y de fila
            */  }

            {turns.map(turn => 
                <li 
                    
                    key={`${turn.square.row}${turn.square.col}`}
                
                >
                    { /* El turno del juador que sera el turno de columna y de fila */ }
                    {turn.player} selected {turn.square.row}, {turn.square.col}

                </li>
            
            )}

        </ol>
    
    )

}

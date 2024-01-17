import { Cuadro } from "./Cuadro"

export function Tablero({board, updateBoard}) {

    return (
        
        <>
        
            {board.map((square, index) => {

                return (
  
                    <Cuadro key={index} index={index} updateBoard={updateBoard}>

                        {square}

                    </Cuadro>

                )

            })}

        </>
        
    )

}
import { Cuadro } from "./Cuadro"

// tablero

// damos las props del board y actualizarlos
export function Tablero({board, updateBoard}) {

    return (
        
        <>

            {/*Damos el board, lo mapeamos*/}
            {board.map((square, index) => {

                return (
                    
                    // retornamos el cuadro, damos su key, su index y el actualizar
                    <Cuadro key={index} index={index} updateBoard={updateBoard}>

                        {/*damos la x y o */}
                        {square}

                    </Cuadro>

                )

            })}

        </>
        
    )

}
import { useState } from "react"
import conffeti from "canvas-confetti"
import {TURNS} from "./arrays"
import { checkWinner, checkEndGame } from "./logic/board"
import { GanadorModal } from "./components/Ganador"
import { Cuadro } from "./components/Cuadro"
import { BotonReset } from "./components/BotonReset"
import { Tablero } from "./components/Tablero"

function App() {

  // estado del tablero, damos que sea un array de 9 y damos el metodo fill
  // cambia todos los elementos en un arreglo por un valor estatico y lo damos en nulo
  const [board, setBoard] = useState(Array(9).fill(null))

  // recojemos los turnos del state, que es la variable de los turnos y en este caso elegimos el X
  const [turn, setTurn] = useState(TURNS.X)

  // estado de winner, lo damos en nulo es que perdio
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    
    setBoard(Array(9).fill(null))

    setTurn(TURNS.X)

    setWinner(null)
  
  }

  // actualizar el board, recojemos el index
  const updateBoard = (index) => {

    // si el board del primer estado tiene el indice igual y ademas ya hay un ganador, ya no puedes hacer nada mas
    if(board[index] || winner) return

    // nuevo board es un arreglo de la copia del primer estado
    //porque?
    // jamas debe de ser mutable el estado
    const newBoard = [...board]

    // damos el nuevoBoard, damos su indice y ese sera el turno
    newBoard[index] = turn

    // actualizamos el tablero por cada click
    setBoard(newBoard)

    // el nuevo turno es, que el valor del turno 
    // sea igual al turns de x si es asi damos el 0 y si no volvemos al X
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    // damos el segundo estado, el nuevo turno
    setTurn(newTurn)

    // el ganador es, la constante de el ganador y damos un nuevo tablero
    const newWinner = checkWinner(newBoard)

    // si hay ganador 
    if(newWinner) {

      conffeti()
      
      // damos el segundo estado de ganador y damos el neuvo ganador
      setWinner(newWinner)
    
    } else if (checkEndGame(newBoard)) {
    
      setWinner(false)
    
    }
  
  }

  return (
    
    <main className="board">

      <h1>Tic Tac Toe</h1>

      <BotonReset resetGame={resetGame} label="Reset"></BotonReset>

      <section className="game">

        <Tablero board={board} updateBoard={updateBoard}></Tablero>

      </section>

      <section className="turn">

        <Cuadro 
        
          isSelected={turn === TURNS.X}
        
        >   {TURNS.X}
        
        </Cuadro>

        <Cuadro

          isSelected={turn === TURNS.O}
        
        >   {TURNS.O}
        
        </Cuadro>

      </section>

      <GanadorModal winner={winner} resetGame={resetGame}></GanadorModal>


    </main>
    
  )
  
}

export default App
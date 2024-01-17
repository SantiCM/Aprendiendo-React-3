import {TURNS} from "./arrays"
import { GanadorModal } from "./components/Ganador"
import { Cuadro } from "./components/Cuadro"
import { BotonReset } from "./components/BotonReset"
import { Tablero } from "./components/Tablero"
import StateApp from "./components/StateApp"

function App() {

  // desestructuramos las propiedades que vamos a utilizar del State y la logica
  const {board, turn, winner, resetGame, updateBoard} = StateApp()
  
  return (
    
    <main className="board">

      <h1>Tic Tac Toe</h1>

      {/*Damos el boton, damos su prop de resetear, del resetGame del state y su label */}
      <BotonReset resetGame={resetGame} label="Reset"></BotonReset>

      <section className="game">

        {/*Damos el tablero, el board y el updated de el state */}
        <Tablero board={board} updateBoard={updateBoard}></Tablero>

      </section>

      <section className="turn">

        {/*Damos el cuadro, si es seleccionado damos el turno que sea igual a los turnos "x" o "o" */}
        <Cuadro isSelected={turn === TURNS.X}>{TURNS.X}</Cuadro>

        <Cuadro isSelected={turn === TURNS.O} >{TURNS.O}</Cuadro>

      </section>

      {/*Ganador componente damos el winner y el resetear */}
      <GanadorModal winner={winner} resetGame={resetGame}></GanadorModal>
      
    </main>
    
  )
  
}

export default App
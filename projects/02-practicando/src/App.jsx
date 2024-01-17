import { useState } from "react"

// recojemos los turnos, que es X y 0
const TURNS = {

  X: "x",

  O: "o"

}

// varible donde manejamos el valor del tablero
// recojemos el children, el isSelected(osea seleccionar un cuadro)
// updateBoard(actualizar el tablero)
// index (posicion)
const Square = ({children, isSelected,  updateBoard, index}) => {

  // css, si esta seleccionado mostramos una clase, si no la que sigue
  const className = `square ${isSelected ? "is-selected" : ""}`

  // hacer click, es una funcion
  const handleClick = () => {

    // actualizamos la props y le damos la props de el index,
    // osea cada que se actualiza el tablero, vera la posicion
    updateBoard(index)

  }

  // retornamos jsx
  return (

    // damos que al hacer click, actualizara el tablero
    <div onClick={handleClick} className={className}>

      {/*Damos el children, el cual hace que todo lo que envuelva el tablero pase */}
      {children}

    </div>
    
  )

}

// wins
const WIINER_COMBOS = [

  // horizontales
  [0, 1, 2],

  [3, 4, 5],

  [6, 7, 8],

  // verticales
  [0, 3, 6],

  [1, 4, 7],

  [2, 5, 8],

  // diagonales
  [0, 4, 8],

  [2, 4, 6],

]

function App() {

  // estado del tablero, damos que sea un array de 9 y damos el metodo fill
  // cambia todos los elementos en un arreglo por un valor estatico y lo damos en nulo
  const [board, setBoard] = useState(Array(9).fill(null))

  // recojemos los turnos del state, que es la variable de los turnos y en este caso elegimos el X
  const [turn, setTurn] = useState(TURNS.X)

  // estado de winner, lo damos en nulo es que perdio
  const [winner, setWinner] = useState(null)

  // checar si gana,
  // damos un argumento de checar el tablero
  const checkWinner = (boardToCheck) => {
    
    // damos un for, donde la const es el combo de la variable de los combos de ganar
    for(const combo of WIINER_COMBOS) {

      // recojemos la posicion  de arreglo a,b,c del como
      const [a, b, c] = combo

      // decimos si el arg esta en la posicion a y pasa
      // damos el que si el arg en posicion a es igual a tablero del b, osea que es igual el simbolo
      // pasamos
      // y si damos el que si el arg en posicion a es igual a tablero del c, retornamos el actualizar del a
      if(boardToCheck[a] &&  boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      
        return boardToCheck[a]
    
      }

    }

    // si no retornamos nada, nadie gano
    return null

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
    if(winner) {
      
      // damos el segundo estado de ganador y damos el neuvo ganador
      setWinner(newWinner)
    
    }
  
  }

  return (
    
    <main className="board">

      <h1>Tic Tac Toe</h1>

      <section className="game">

        {board.map((_, index) => {

          return (
            
            <Square key={index} index={index} updateBoard={updateBoard}></Square>

          )
          
        })}

      </section>

      <section className="turn">

        <Square 
        
          isSelected={turn === TURNS.X}
        
        >   {TURNS.X}
        
        </Square>

        <Square

          isSelected={turn === TURNS.O}
        
        >   {TURNS.O}
        
        </Square>

      </section>

    </main>
    
  )
  
}

export default App
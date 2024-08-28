import { useState } from "react"
import { GameBoard } from "./components/GameBoard"
import { Player } from "./components/Player"
import { Log } from "./components/Log"
import { WINNING_COMBINATTIONS } from "./winning_combinattions"
import { GameOver } from "./components/GameOver"

// madamos una variable que contiene los jugadores 
// en este caso son dos por el juego del gato
// el cual es X y Y
const PLAYERS = {

  "X" : "Player 1",

  "0" : "Player 2"

}

// aqui madamos un arreglo de 3 arreglos que serian las casillas del tablero
const INITIAL_GAME_BOARD = [

  [null, null, null],

  [null, null, null],

  [null, null, null],

]

// Jugador activo le mandamos el gameTurns (turno del juego)
const deriveActivePlayer = (gameTurns) => {
    
  // En este caso seria el jugador X
  let currentPlayer = "X"

  // si el turno es menor a 0 y el turno de la posicion 0 del jugador 
  // es igual a X
  if(gameTurns.length > 0 && gameTurns[0].player === "X") {
    
    // Entonces el siguiente turno es la "0"
    currentPlayer = "O"
    
  }

  // retornamos OBLIGATORIO
  return currentPlayer

} 

// TABLERO DEL JUEGO
const deriveGameBoard = (gameTurns) => {
   
  // manamos el tablero que es la copia del array pasado
  // le mandamos todo con el map
  // y mandamos una funcion para hacer un nuevo array de la copia
  // SUPER UTIL EN ARRAYS
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

  // hacemos un for que viende de esos turnos
  for(const turn of gameTurns) {

    // sacamos el jugador y el cuadrado
    // y le damos igual turno
    const {square, player} = turn
    
    // mandamos la columna y la fila que va a ser igual al square 
    // osea al cuadrado
    const {row, col} = square

    // hacemos el tablero con la fila y columna y le damos igual el jugador
    gameBoard[row][col] = player
    
  }

  // retornamos OBLIGATORIO
  return gameBoard

}

// Encontrar al ganador, enviamos el tablero y los jugadores
const deriveWinner = (gameBoard, players) => {  
  
  // mandamos una variable del ganador 
  let winner 

  // hacemos la combinacion de la variable combinacion de ganadores
  for(const combination of WINNING_COMBINATTIONS) {
    
    // primer forma de ganar es: 
    // que el tablero del array de la combinacion el posicion 0
    // y la combinacion de la fila 0
    const firstSquaresSymbol = gameBoard[combination[0].row][combination[0].column]

    // segunda forma de ganar es: 
    // que el tablero del array de la combinacion el posicion 1
    // y la combinacion de la fila 1
    const secondSquaresSymbol =  gameBoard[combination[1].row][combination[1].column]

    // tercer forma de ganar es: 
    // que el tablero del array de la combinacion el posicion 2
    // y la combinacion de la fila 2
    const thirdSquaresSymbol =  gameBoard[combination[2].row][combination[2].column]
    
    // NOTA: RECORDAR QUE EN JS SE CUENTAN ASI LAS POSICIONES DE LOS ARRAYS

    // si la primera combinacion y la primera combinacion es igual a la segunda 
    // y si la primera opcion sea igual a la tercera
    if(firstSquaresSymbol && firstSquaresSymbol === secondSquaresSymbol && firstSquaresSymbol === thirdSquaresSymbol) {
      
      // el ganador sera igual al jugador del array de el firstSquaresSymbol
      winner = players[firstSquaresSymbol]
    
    }

  }

  // retornamos OBLIGATORIO
  return winner

}


const App = () => {

  // Estado de los juadores mandando la variable de los jugadores
  const [players, setPlayers] = useState(PLAYERS)

  // Estado de los turnos que recibe un array vacio
  const [gameTurns, setGameTurns] = useState([])

  //const [hasWinner, setHasWinner] = useState(false)

  //const [activePlayer, setAtivePlayer] = useState("X")

  // Aqui hacemos el codigo mas limpio

  // Variable que hace que el jugador activo que recibe 
  // lo que recibe en la variable misma
  // EJEMPLO:
  // const deriveActivePlayer = (gameTurns) => {

  const activePlayer = deriveActivePlayer(gameTurns)

  // Variable que hace que el tablero que recibe 
  // lo que recibe en la variable misma
  // EJEMPLO:
  // const deriveGameBoard = (gameTurns) => {

  const gameBoard = deriveGameBoard(gameTurns)

  // Variable que da al gandor que recibe 
  // lo que recibe en la variable misma
  // EJEMPLO:
  // const deriveWinner = (gameBoard, players) => {  

  const winner = deriveWinner(gameBoard, players)

  // Variable para dar el empate
  // si el turno es igual a 9 y no hay ganador 
  const hasDrow = gameTurns.length === 9 && !winner

  // recibimos el rowIndex y el colIndex
  const handleSelectSquare = (rowIndex, colIndex) => {
  
    //setAtivePlayer((curActive) => curActive === "X" ? "O" : "X")

    // inmutable
    setGameTurns(prevTurns => {

      // mandamos el jugador que viene de 
      // const deriveActivePlayer
      const currentPlayer = deriveActivePlayer(prevTurns)

      // actualizar
      // madamos un array que tiene el square de el objeto del {row: rowIndex, col: colIndex}
      // y el jugador recibe el juagdor activo
      const updated = [ { square: {row: rowIndex, col: colIndex}, player: activePlayer } ,
        
        // copia
        ...prevTurns
      
      ]

      // retornamos OBLIGATORIO
      return updated
    
    })
  
  }

  // resetear el juego 
  const handleRestart = () => {
    
    // seria mandar el segundo estado como array vacio
    setGameTurns([])
  
  }

  // nombre del ganador recibe el symbol y el newName
  const handlePlayerNameChange = (symbol, newName) => {
    
    // el segundo estado hace una funcion de la copia misma y 
    setPlayers(prevPlayers => {
    
      return {
      
        ...prevPlayers,

        // que ese symbolo ahora sea ese nombre 
        [symbol] : newName
      
      }
    
    })
  
  }

  return (
    
    <main>

      <div id="game-container">

        <ol id="players" className="highlight-player">

          { /* Para ambos compoenntes <Player></Player> */ }

          {/* Le mandamos la prop de initialName que va a ser el PLAYERS (variable) . X */}
          {/* IsActive (props) tiene que ser el jugador activo sea igual a X o O */}
          {/* OnChangeName (props) tiene que ser la variable de  
            const handlePlayerNameChange = (symbol, newName) => {
              // el segundo estado hace una funcion de la copia misma y         
              setPlayers(prevPlayers => {
                return {
                  ...prevPlayers,
                  // que ese symbolo ahora sea ese nombre 
                  symbol] : newName
                }
              })
            } 
            */
          }

          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange}></Player>

          <Player initialName={PLAYERS.O} symbol="0" isActive={activePlayer === "O"}  onChangeName={handlePlayerNameChange}></Player>

        </ol>

        { /* Le decimos que le ganador y el empate tiene que resetear el juego o dar un gandor del componente <GameOver></GameOver> */ }

        {(winner || hasDrow) && <GameOver onRestart={handleRestart} winner={winner}></GameOver>}

        { /* Ese mismo componente le mandamos la constante de el handle y los turnos los turnos de la constante y del board el tableros */ }
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} board={gameBoard}></GameBoard>

      </div>

      { /* Componente de <Log></Log> que recibe los turnos  */ }
      <Log turns={gameTurns}></Log>

    </main>
    
  )

}

export default App

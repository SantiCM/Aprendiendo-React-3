import { useState } from "react"
import {TURNS} from "../arrays"
import conffeti from "canvas-confetti"
import { checkWinner, checkEndGame } from "../logic/board"
import {StorageGame, RemoveGame} from "../logic/storage/index"

// componente donde se maneja el estado
export default function StateApp() {

  // damos el estado del board, como una funcion
  const [board, setBoard] = useState(() => {
    
    // calback dentro, una funcion que tiene que devolver el valor con que se inicializa el estado

    // damos el storage, del window del localStorage, lo insertamos el board
    const boardFromStorage = window.localStorage.getItem("board")

    // retornamos ese storage si es asi da el json de lo que se de como valor, sino sera el arreglo por defecto
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  
  })
  
  // recojemos los turnos del state, damos un callback
  const [turn, setTurn] = useState(() => {

    // damos el storage, del window del localStorage, lo insertamos el turn
    const turnFromStorage = window.localStorage.getItem("turn")

    // ||, falsy, ??, esto en null o undefined

    // retornamos ese storage sino los turnos 
    return turnFromStorage ?? TURNS.X
    
  })

  // estado de winner, lo damos en nulo es que perdio
  const [winner, setWinner] = useState(null)

  // al hacer reset
  const resetGame = () => {

    // damos el segundo estado del arreglo por defecto
    setBoard(Array(9).fill(null))

    // damos el turno de x
    setTurn(TURNS.X)

    // el ganador no existe nulo
    setWinner(null)

    // y damos el remover del local
    RemoveGame()
    
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

    // damos guardar el storage por cada turno, y damos su prop de board, va a dar
    // el board ya actualizado al igual que el turno
    StorageGame({  board: newBoard, turn: newTurn})
    
    // el ganador es, la constante de el ganador y damos un nuevo tablero
    const newWinner = checkWinner(newBoard)
    
    // si hay ganador 
    if(newWinner) {
      
      // damos confetiii, yuju
     conffeti()
          
     // damos el segundo estado de ganador y damos el neuvo ganador
     setWinner(newWinner)
        
     // si no, damos que finaliza el juego, le damos un nuevo tablero
    } else if (checkEndGame(newBoard)) {

      // y damos que el ganador no existe 
      setWinner(false)
      
    }
      
  }

  // retornamos todas las propiedades que necesitamos
  return { board, setBoard, turn, setTurn, winner, setWinner, resetGame, updateBoard}

}
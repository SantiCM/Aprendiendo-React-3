import { WIINER_COMBOS } from "../arrays"

// checar si gana,
// damos un argumento de checar el tablero
export const checkWinner = (boardToCheck) => {
    
    // damos un for, donde la const es el combo de la variable de los combos de ganar
    for(const combo of WIINER_COMBOS) {

      // recojemos la posicion  de arreglo a,b,c del como
      const [a, b, c] = combo

      // decimos si el arg esta en la posicion a y pasa
      // damos el que si el arg en posicion a es igual a tablero del b, osea que es igual el simbolo
      // pasamos
      // y si damos el que si el arg en posicion a es igual a tablero del c, retornamos el actualizar del a
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      
        return boardToCheck[a]
    
      }

    }

    // si no retornamos nada, nadie gano
    return null

}

export const checkEndGame = (newBoard) => {
    
    // si todas las posicioanes del array tiene que son diferentes a null, que ninguna coincide, damos que acaba el juego
    return newBoard.every((square) => square !== null)
    
}
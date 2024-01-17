// hacemos una funcion de insertar el storage
// damos las props de board y turn
export function StorageGame({board, turn}){

    // se la damos de esta manera
    window.localStorage.setItem("board", JSON.stringify(board))

    window.localStorage.setItem("turn", turn)

}

// funcion para remover clasica
export function RemoveGame() {

    window.localStorage.removeItem("board")

    window.localStorage.removeItem("turn")

}
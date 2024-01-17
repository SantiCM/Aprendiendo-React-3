
// boton reset
// damos las props de el reset y del label
export function BotonReset({resetGame, label}) {

    return (

        // damos el boton que al hacer click es la prop de reset y el label que nosotros queramos
        <button onClick={resetGame}>{label}</button>
        
    )

}
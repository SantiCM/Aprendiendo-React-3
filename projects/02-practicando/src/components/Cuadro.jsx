// varible donde manejamos el valor del tablero
// recojemos el children, el isSelected(osea seleccionar un cuadro)
// updateBoard(actualizar el tablero)
// index (posicion)
export const Cuadro = ({children, isSelected,  updateBoard, index}) => {

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
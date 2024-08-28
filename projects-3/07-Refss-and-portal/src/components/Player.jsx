import { useState, useRef } from "react";

// Los valores de estado hacen que un componente se vuelva a ejecutar cuando cambia a traves de esa funcion de actualizacion de estado 
// se ejecuta cuuando los valores deban reflejarse directamente en la interfaz del usuario

// No se debe de utilizar el estado para los valores que se utilizan detras de escena 

// Los ref no hacen que se vuelva a ejecutar el componente ni la interfaz de usuario, sino para cambiar valores detras de escenas mejor conocidos 
// como el DOM

export default function Player() {

  const playerNameInput = useRef()

  const [enteredPlayer, setEnteredPlayer] = useState(null)

  const handleClick = () => {
    
    setEnteredPlayer(playerNameInput.current.value)

    playerNameInput.current.value = ""
  
  }

  // Se puede utilizar el ref sin el state, si se puede pero no es lo mas comveniente 

  /*
  
    const handleClick = () => {
    
      (NO)setEnteredPlayer(playerNameInput.current.value)

      playerNameInput.current.value = ""
  
    }
  
  */

  return (

    <section id="player">
      
      { /* <h2>Welcome {playerNameInput.current ? playerNameInput.current.value : "unknown entity"}</h2> */ }
      
      <h2>Welcome {enteredPlayer ?? "unknown entity"}</h2>
      
      <p>
      
        <input ref={playerNameInput} type="text"/>
      
        <button onClick={handleClick}>Set Name</button>
      
      </p>
    
    </section>
  
  );

}
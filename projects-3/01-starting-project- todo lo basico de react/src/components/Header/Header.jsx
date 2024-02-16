// importacion de las imagenes
import reactImage from "../../assets/react-core-concepts.png"

import "./Header.css"

const descriptions = ["Fundamental", "Crucial", "Core"]

// hacer un numero aleatorio, un indice aleatorio
const getRandom = (max) => {

  // retornamos un numero random multiplicado por el maximo mas uno
  return Math.floor(Math.random() * (max + 1))
}


export const Header = () => {

    const description = descriptions[getRandom(2)]
  
    return (
      
      <header>
        
        <img src={reactImage} alt="Stylized atom" />
        
        <h1>React Essentials</h1>
        
        <p>
          { description } React concepts you will need for almost any app you are
          going to build!
        
        </p>
      
      </header>
      
    )
  
  }
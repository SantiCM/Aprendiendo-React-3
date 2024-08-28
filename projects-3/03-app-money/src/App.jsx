import { useState } from "react"
import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { Results } from "./components/Results"


function App() {

  // Mandamos un estado para el input
  // NOTA: En este caso estamos utilizando el mismo nombre del archivo js
  const [ userInput, setUserInput ] = useState({
          
    initialInvestment: 100000,
    
    annualInvestment: 1200,
    
    expectedReturn: 1500,
    
    duration: 1,

  })
  
  // mandamos un tipo de validacion que la duracion no sea menor a 1
  const inputsValid  = userInput.duration === 0

  // NOTA: Variable super util para regenerar los objetos y arrays

  // mandamos los argumentos
  const HandleChange = (inputIdentifier, newValue) => {
    
    // mandamos el segundo estado que recibe una funcion
    setUserInput(prevUserInput => {
        
      // retorna 
      return {
            
        // la copia de esa funcion
        ...prevUserInput,

        // mandamos como array el inputIdentifier
        // y le damos el nuevo valor
        // el + forzara una conversion de este valor de cadena
        // a un valor numerico
        [inputIdentifier] : +newValue
    
      }
    
    })

  }

  return (

    <>  
      
      { /* Mandamos el componente Header */ }

      <Header></Header> 

      { /* Mandamos el componente userinput
        con sus props de onChange y de userInput
      
      */ }

      <UserInput onChange={HandleChange} userInput={userInput}></UserInput>  

      { /* Si no pasa esa validacion mostramos este texto */ }

      { /* Si pasa le damos el componente de Results con sus props que es el input que recibe el primer estado */ }

      <Results input={userInput}></Results>

    </>
    
  )

}

export default App

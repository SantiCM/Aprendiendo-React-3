import { useState } from "react"

// Hook para el input, le damos el valor por defecto y la validacion de la funcion
export const useInput = (defaultValue, validationFn) => {

    // mandamos un estado donde se da el valor entero y recibe el valor por defecto
    const [enteredValue, setEnteredValue] = useState(defaultValue)

    // mandamos un estado de editar en falso
    const [didEdit, setDidEdit] = useState(false)

    // mandamos una variable si es valido que da la valiacion del argumento y recibe el valor entero
    const valueIsValid = validationFn(enteredValue)

    // change del input
    // recibe el evento
    const handleInputChange = (event) => {

        // el segundo estado recibe el evento del target que viene del value
        setEnteredValue(event.target.value)

        // y el segundo estado de editar se queda en falso
        setDidEdit(false)
  
    }

    // el input del bur
    const handleInputBur = () => {

        // el segundo estado de editar se queda en true
        setDidEdit(true)
    
    }

    // retornamos
    return {
        
        // el valor entero
        value: enteredValue,

        // el change del input
        handleInputChange,

        // el input del bur
        handleInputBur,

        // el error es la edicion si es true que el valor sea valido cambie
        hasError: didEdit && !valueIsValid
    
    }

}

import { useState } from "react"

export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm)
        
    const onInputChanhge = ({ target }) => {
        const { name, value } = target
        setFormState({
          ...formState,
          [name]: value
    
        })
    }

    const onReset = () => {
        setFormState(initialForm)
    }
    return {
        ...formState,
        formState,
        onInputChanhge,
        onReset
    }

}

// Recibe un estado inicial y de ese estadp inicial regresa las diferentes propiedades, como controlar el cambio del input o resesetear el input 
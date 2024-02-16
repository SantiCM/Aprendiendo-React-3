import { useState } from "react"

// Generico

// Damos el hook de el form
// Damos Un T que se exiende como objeto y recibe un formulario y le damos el T
export const useForm = <T extends Object> (formulario: T) => {
    
    // damos un useState que se maneja del formulario de arriba
    const [state, setState] = useState(formulario)

    // del change, damos el valor que es string
    // y damos el campo que es una key de T
    const onChange = ( value: string, campo: keyof T ) => {
        
        // damos el segundo estado
        setState({

            // la copia del estado
            ...state,
            
            // damos como array el campo y damos el valor
            [campo]: value
        
        })
    
    }

    return {

        // damos la copia del estado
        ...state,

        // el change
        onChange, 

        // el formulario 
        formulario : state
    
    }

}
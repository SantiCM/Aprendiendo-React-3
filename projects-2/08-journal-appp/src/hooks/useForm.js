import { useEffect, useMemo, useState } from "react"

// Recibimos el primerform en objeto vacio y las validaciobes igual
export const useForm = (initialForm = {}, formValidations = {}) => {
    
    // de ahi recibimos el estado inicial 
    const [formState, setFormState] = useState(initialForm)

    // lo mismo pero las validaciones con objeto vacio
    const [formValidation, setFormValidation] = useState({})

    // un efecto de las validaciones 
    useEffect(() => {

      createValidators()

    }, [ formState ])

    useEffect(() => {

        setFormState(initialForm)
      
    }, [initialForm])
    
    // si el formulario es validado lo vamos a memorizar
    const isFormValid = useMemo(() => {

        // el cual hcae que que el objeto son sus keys de la validacion de los formularios
        for(const formValue of Object.keys(formValidation)) {
            
            // si esa valiacion recibe los valores tiene que ser diferente a null si no falso
            if(formValidation[formValue] !== null) return false;
        
        }

        // si es asi retorna true
        return true
        
        // dependencia la validacion del formulario
    }, [formValidation])
    
    // cambia el input SIEMPRE USALO ES UTIL
    const onInputChanhge = ({ target }) => {
        const { name, value } = target
        setFormState({
          ...formState,
          [name]: value
    
        })
    }

    // Como funciona el resetear un formulario desde el reseteo del primer estaod
    const onReset = () => {
        setFormState(initialForm)
    }

    // la creacion de las validaciones
    const createValidators = () => {
        
        const formCheckedValues = {}

        for(const formField of Object.keys(formValidations)) {
            
            const [fn, errorMessage = "Este campo es requerido"] = formValidations[formField]

            formCheckedValues[`${formField}Valid`] = fn ( formState [ formField ] )  ? null : errorMessage
        
        } 

        setFormValidation(formCheckedValues)
    
    }

    // retorna todoooooo
    return {
        ...formState,
        formState,
        onInputChanhge,
        onReset,

        ...formValidation,
        isFormValid

    }
}
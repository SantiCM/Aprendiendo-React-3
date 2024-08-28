import { useState, useCallback } from "react"
import questions from "../questions"
import { Question } from "./Questions"
import { Summary } from "./Summary"

// Componente donde daremos todo el contenido de la app
export const Quiz = () => {

    // mandamos un estado donde lo damos con un array vacioo
    const [userAnswers, setUserAnswers] = useState([])

    // mandamos una variable que esta activa la pregunta que viene del primer estado de todo
    // esto se hace para evitar un segundo estado y que todo sea mas facil de llevar
    const activeQuestionIndex = userAnswers.length 

    // mandamos una variable donde ya se completo el quiz
    // y decimos que de todas las preguntas del index sea igual a las preguntas de todo el arreglo
    const quizIsComplete = activeQuestionIndex === questions.length

    // seleccionar la pregunta, le damos el useCalllback, lo mandamos con su sintaxis y le damos el argumento
    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer) {
        
        // mandamos el segundo estadp, con una funcion (clasico para mantener el estado)
        setUserAnswers((prevUserAnswers) => {
            
            // lo retornamos
            return [
                
                // damos la copia de la funcion
                ...prevUserAnswers,

                // y el argumento
                selectedAnswer
            
            ]
        
        })
    
    }, [])

    // variable para darle skip a la pregunta
    // damos un useCallback para las dependecias
    // damos una funcion que da flecha y le damos la variable de arriba en null
    // y le damos como dependencia la misma variable
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    // si esta completado el quiz
    if(quizIsComplete) {
        
        // retornamos
        return (
            
            // el componente de Summary que es donde se encuentran los resultados de la prueba 
            // con su propiedad que es el primer estado
            <Summary userAnswers={userAnswers}></Summary>
            
        )
    
    }

    // retornamos
    return (

        <div id="quiz">

            { /* Mandamos el componente de la pregunta con:
                
                la key: Manera de lograr que todo gire entorno a esa key la cual es las preguntas (todo su contenido)

                index: mandamos esta propiedad con el fin que no nos muestre el warning de que estamos utilizando el mismo key,
                le damos la misma propiedad del key, pero ya no estamos tomando la key como tal

                onSelectAnswer: le damos la propiedad de seleccionar la respuesta que viene de la variable donde se utiliza el 
                useCallback()

                onSkipAnswer: le damos de propiedad la variable de handleSkipAnswer, que tambien ocupa el useCallback()

            */ }

            <Question 

                key={activeQuestionIndex}

                index={activeQuestionIndex}
           
                onSelectAnswer={handleSelectAnswer}

                onSkipAnswer={handleSkipAnswer}
                
            >

            </Question>

        </div>

    )

}
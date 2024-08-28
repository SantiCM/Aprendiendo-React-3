import { useRef } from "react"

export const Answers = ({answers, selectedAnswer, answerState, onSelect}) => {

    // mandamos un useRef para darle el valor a la barajeada
    const shuffledAnswers = useRef()

    // si es false el ref que viene del current
    if(!shuffledAnswers.current) {
    
        // damos el ref del current
        // damos la copia de las preguntas que viene del array de la variable de ver cuantas hay de las answers
        shuffledAnswers.current = [...answers]

        // esa mismo red que viene del current le damos el sort
        // el cual no da un nuevo array sino lo edita (por eso se crea un nuevo array)
        // valor de 50 de cada 100 casos, valor positivo
        shuffledAnswers.current.sort(() => Math.random() - 0.5 )
    
    }
    
    return (
    
        <ul id="answers">

            { /* Damos la variable del archivo de js y le damos como array el primer estado que viene de las preguntas, lo mapeamos, damos la funcion*/ }

            {shuffledAnswers.current.map((answer) => {

                // Estilos anidados

                // damos una variable de clases como cadena vacia
                let cssClases = ""

                // variable, esta seleccionada 
                // es igual a seleccionar la respuesta es igual a la respuesta
                const isSelected = selectedAnswer === answer

                // si el estadp de las respuestas es igual a la clave de "answered" y esta seleccionada
                if(answerState === "answered" && isSelected) {
                    
                    // damos la clase seleccionada
                    cssClases = "selected"
            
                }

                // si el estado de las respuestas es correcto o incorrecto y esta seleccionado
                if(answerState === "correct" || answerState === "wrong" && isSelected) {
                    
                    // la clase es el estado por defecto
                    cssClases = answerState
                
                }

                return (
                
                    // le damos su key
                    <li key={answer} className="answer">

                        { /* Y damos el boton al hacerle click, mandamos una funcion y damos la variable OnSelect  y le damos el answer (clasico)
                            damos la clase que hicimos dinamica en el className
                            y le decimos que el boton se va a desabilitar cuando el estado sea diferente a nulo
                            osea cuando una respuesta ya haya sido seleccionada 
                        */ }

                        <button 
                
                            onClick={() => onSelect(answer)} 
                
                            className={cssClases}

                            disabled={answerState !== ""}
                
                        >
                            { /* Damos la respuesta */ }

                            {answer}
                
                        </button>

                    </li> 
                
                )

            })}

        </ul>
  
    )
}

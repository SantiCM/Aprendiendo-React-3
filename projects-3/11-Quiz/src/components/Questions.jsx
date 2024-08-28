import { useState } from "react"
import { Answers } from "./Answers"
import { QuestionTimer } from "./QuestionTimer"
import questions from "../questions"

// Mandamos este componente para evitar el bug a la hora de poner el key
// entonces ponemos las propiedades
export const Question = ({index, onSelectAnswer, onSkipAnswer}) => {

    // mandamos un estado donde damos como objeto 
    // que este seleccionada la respuesta como cadena vacia
    // y el si es correcto en nulo
    const [answer, setAnswer] = useState({
    
        selectedAnswer: "",

        isCorrect: null
    
    })

    // manejando el tiempo
    let timer = 10000

    // si la respuesta esta seleccionada
    if(answer.selectedAnswer) {
        
        // damos el tiempo en 1 segundo
        timer = 1000
    
    }

    // si la respuesta no es correcta 
    if(answer.isCorrect !== null) {
        
        // el tiempo sera de 2 segundos
        timer = 2000
    
    }

    // seleccionar la respuesta 
    // damos como argumento la respuesta
    const handleSelectAnswer = (answer) => {
        
        // mandamos el segundo estado, donde damos el objeto
        setAnswer({
            
            // si esta seleccionada, es la respuesta
            selectedAnswer: answer,

            // si es correcto, sigue en nulo
            isCorrect: null
        
        })

        // tiempo
        setTimeout(() => {
            
            // el segundo estado
            setAnswer({
                
                // si esta seleccionada, es la respuesta
                selectedAnswer: answer,
                
                // si es correcto entonces sera las respuesta que viene del arreglo 
                // del index (evitar el error de la key)
                // de las respuestas en la posicion 0 que sean iguales a las respuestas
                // ¿Porque de la posicion 0 todas?
                // Porque en el archivo js donde tenemos el arreglo de las preguntas y respuestas
                // la primera posicion del arreglo es la respuesta correcta en todas
                isCorrect: questions[index].answers[0] === answer
            
            })

            // otro tiempo
            setTimeout(() => {
                
                // cuando sea seleecionadoo (le damos las respuestas)
                onSelectAnswer(answer)
                
                // osea cuando ya haya sido seleccionada la respuesta

                // damos 2 segundos para pasar a la siguiente pregunta
            }, 2000)
            
            // y lo dejamos en 1
        }, 1000)
    
    }

    // el estado de las respuestas como cadena vacia
    let answerState = ""

    // si las respuestas son seleccionadas y las respuestas son correctas 
    // y por consecuencia son nulas
    if(answer.selectedAnswer && answer.isCorrect !== null) {
        
        // ese estado sera igual a que si
        // las respuestas son correctas damos el correct y si no el wrong
        answerState = answer.isCorrect ? "correct" : "wrong"
        
        // si las respuestas no estan seleccionadas 
    } else if (answer.selectedAnswer) {
        
        // decimos que el estado de las respuestas es la clave de "answered"
        answerState = "answered"
    
    }
  
    return (
  
        <div id="question">

            { /*Damos el componente del tiempo

                con el key: es el tiempo

                el timer: el tiempo por defecto
                
                el timeout es: que las respuestas que viene de las respuestas seleccionadas sea igual a un string vacio y si es asi,
                mandamos el skip sino es nulo

                y el mode, que es el del estilo: se maneja por el estado 

            */}

            
            <QuestionTimer 
                
                key={timer} 
                
                timer={timer} 
                
                onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null} 
                
                mode={answerState}
                
            >


            </QuestionTimer>

            { /* Damos del archivo js del index el texto de las preguntas*/ }

            <h2>{questions[index].text}</h2>

            { /* Damos el componente Answers que recibeee 

                las respuestas: que es las questions del js que viene del array de las respuestas

                esta seleccionada la respuesta: viene de las respuesta . seleccionar la respuesta

                estado de la respuesta: damos el estado inicial

                y en seleccionar: de la variable donde mamejamos todo los tiempos
            
            */  }

            <Answers

                answers={questions[index].answers} 
                    
                selectedAnswer={answer.selectedAnswer}

                answerState={answerState}

                onSelect={handleSelectAnswer}
                    
            >
                
            </Answers>

        </div>
  
    )


}

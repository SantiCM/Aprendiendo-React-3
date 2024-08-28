import { useEffect, useState } from "react"

// componente para gestionar el tiempo de cada pregunta 
// damos como argumento el timer, que es el tiempo que dura
// y el onTimer que lo utilizamos para la dependencia
// y damos el mode para manejar el estilo
export const QuestionTimer = ( { timer, onTimeOut, mode } ) => {

    // damos un estado donde recibimos el tiempo
    // este estado es para manejar el setInterval
    const [remainingTime, setRemainingTime] = useState(timer)

    // damos un efecto
    useEffect(() => {

        // donde el tiempo le da la propiedad de la dependencia y el tiempo
        const tiemoutProgress = setTimeout(onTimeOut, timer)

        // retornamos la limpieza
        return (() => {
            
            // donde limpiamos el setTimeOut
            clearTimeout(tiemoutProgress)
        
        })
        
        // y aqui mandamos la dependecia
    }, [onTimeOut, timer])
    
    // damos otro efecto
    useEffect(() => {

        // donde mandamos un setInterval
        const interval = setInterval(() => {
            
            // donde el segundo estado sera una funcion la cual, esa misma funcion menos 100
           setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
            
           // dura 100 milisegundos
        }, 100)

        // retornamos la limpieza
        return (() => {
            
            // donde limpiamos el Interval
            // la limpieza se hace para quitar el bug de que no dura los 10 seg
            clearInterval(interval)
        
        })
    
        // sin dependencia
    }, [])
    
    
    return (
        
        // damos la propiedad de html de progress que el tiempo maximo es el timer y el valor es el primer estado
        // y damos el mode como la clase
        <progress id="question-time" max={timer} value={remainingTime} className={mode}></progress>

    )

}

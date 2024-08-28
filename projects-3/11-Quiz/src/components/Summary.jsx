import quizCompleteImage from "../assets/quiz-complete.png"
import questions from "../questions"

// Mostrando los resultados 
// le damos como argumento 
// las respuestas del usuario
export const Summary = ( { userAnswers } ) => {

    // respuestas skipeadas 
    // decimos que las respuestas de los usuaruos con el metodo filter 
    // que crea un nuevo array 
    // y le damos la funcion, esa misma funcion si es igual a nula, esque es una pregunta sin respuesta
    const skippedAnswers = userAnswers.filter(answer => answer === null) 

    // respuestas correctas
    // decimos que las respuestas de los usuaruos con el metodo filter 
    // que crea un nuevo array 
    // y le damos la funcion de la respuesta y del index,
    // y decimos que si la respuesta es igual al archivo js que viene del array del index que viene
    // de las respuestas en la posicion 0 = es correcta la respuesta
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0])

    // hacer los porcentajes de respuestas skipeadas
    // Hacemos que de el numero de las preguntas skipeadas de todooo su contenido
    // dividido en las respuestas de los usuarios de todas
    // por 100 para sacar el porcentaje
    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100)

    // hacer los porcentajes de respuestas correctas 
    // Hacemos que de el numero de las preguntas correctas de todooo su contenido
    // dividido en las respuestas de los usuarios de todas
    // por 100 para sacar el porcentaje
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100)

    // hacer los porcentajes de respuestas incorrectas
    // decimos que 100 menos las skipeadas menos las correctas 
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare
  
    return (
    
        <div id="summary">

            <img src={quizCompleteImage} alt="Winnn"></img>

            <h2>Quiz Completed!</h2>

            <div id="summary-stats">

                { /* Damos cada uno de las propiedades */ }

                <p>

                    <span className="number">{skippedAnswersShare} %</span>

                    <span className="text">Skipped</span>

                </p>

                <p>

                    <span className="number">{correctAnswersShare} %</span>

                    <span className="text">Answes Correctly</span>

                </p>

                <p>

                    <span className="number">{wrongAnswersShare} %</span>

                    <span className="text">Answes Incorrectly</span>

                </p>

            </div>

            <ol>

                { /* Las respuestas del usuario las mapeamos y mandamos la funcion
                    en este caso estamos utilizando le key para evitar el warning de dar la misma funcion
                    y tambien para el tema de los porcentajes
                */ }

                {userAnswers.map((answer, index) => {

                    // Damos los estilos dinamicos 

                    // damos la clase de css
                    let cssClasses = "user-answer"

                    // si la respuesta es nula 
                    if(answer === null) {
                        
                        // se pone el espacio en la clase con la idea que antes de esta clase que ponemos va la de arriba
                        cssClasses += " skipped";
                        
                        // pero si la respuesta es igual a la respuesta correcta
                        // en este caso mandamos el index
                    } else if (answer === questions[index].answers[0]) {

                        // damos la clase de css que es correcta
                        cssClasses += " correct";
                        
                        // si es incorrecta
                    } else {

                        // damos la clase de incorrecta
                        cssClasses += " wrong"
                    
                    }
                
                    return (
                        
                        // retornamos el <li></li> y le damos el key de index ya mencionado
                        <li key={index}>

                            { /* Damos el index mas 1, que es el numero de la pregunta*/ }

                            <h3>{index + 1}</h3>

                            { /* Damos el questions del archivo js que viene del arreglo del index que viene del texto
                                osea la pregunta 
                            */ }

                            <p className="question">{questions[index].text}</p>

                            { /* Damos la clase dinamica del css y damos que si la respuesta es true damos el "Skipped, osea que no contesto nada */ }

                            <p className={cssClasses}>{answer ?? "Skipped"}</p>

                        </li>
                    
                    )                   
                
                })}

            </ol>

        </div>
    
    )

}

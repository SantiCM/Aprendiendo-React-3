import { useState } from "react"

// nuevas tareas 
// recibe como argumento el add

export const NewTasks = ({onAdd}) => {

    // mandamos un estado donde manejaremos las tareas y para no tener warning lo mandamos asi ("")
    const [enteredTasks, setEnteredTasks] = useState("")
    
    // varibale tipica en un input
    // recibiimos el evento
    const handleChange = (event) => {

        // el segundo estado recibe el evento que viene del target que viene del valor
        setEnteredTasks(event.target.value)

    }

    // hacer click
    const handleClick = () => {

        // si el primer estado en todo el input es igual a ""

        if(enteredTasks.trim() === "") {
            
            // lo retornamos 
            return
        
        }

        // la propiedad recibe el primer estado
        onAdd(enteredTasks)
        
        // el segundo estado con comillas simples
        setEnteredTasks("")
  
    }
    
    return (

        <div className="flex items-center gap-4">
            
            { /* Mandamos el input que recibe el comun onChange y el valor sera el primer estado */ }

            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" onChange={handleChange} value={enteredTasks}></input>

            { /* El boton al hacerle click mandamos la variable de funcionalidad de añadir una nueva tarea*/ }

            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>

        </div>
    
    )

}

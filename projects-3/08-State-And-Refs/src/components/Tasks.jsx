import { NewTasks } from "./NewTasks"

// Componente de las tareas 
// le mandamos el add, delete y las tareas
export const Tasks = ({onAdd, onDelete, tasks}) => {
   
    return (
   
        <section>
            
            { /* Mandamos el componente de nuevas tareas y le damos el add que viene de la desustruracion */ }

            <NewTasks onAdd={onAdd}></NewTasks>
            
            <h2 className="text/2xl font-bol text-stone-700 mb-4">Tasks</h2>

            { /* Las tareas si son igual a 0 mandamos este texto*/ }

            {tasks.length === 0 && (<p className="text-stone-800 mb-3 my-4">This project does not have any tasks yet</p>)}

            { /* Si las tareas son mayor a 0 entonces*/ }

            { tasks.length > 0 && 
                
                <ul className="p-4 mt-8 rounded-md bg-stone-100">

                    { /* Mandamos el mapeo de las tareas*/ }

                    {tasks.map((task) => 

                        // le damos su key
                        <li key={task.id} className="flex justify-between my-4">

                            { /* Mandamos el span de las tareas que viene de el text*/ }

                            <span>{task.text}</span>

                            { /* Mandamos el boton que al hacerle click hacemos una funcion que recibe la eliminacion de las tareas con su id */ }
                            
                            <button onClick={() => onDelete(task.id)} className="text-stone-100 bg-red-500 hover:bg-stone-300">Clear</button>
                            
                        </li>
 
                    )}
                
                </ul>
                
            }

        </section>

    )

}
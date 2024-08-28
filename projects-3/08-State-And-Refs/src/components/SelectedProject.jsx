import { Tasks } from "./Tasks"

// seleccionar proyecto
// recibe las propiedades
export const SelectedProject = ( { project, onDelete, onAddTasks, onDeleteTasks, tasks } ) => {

    // hacemos que la hora sea mas vistosa de esta manera 
    // mandando el proyecto que viene de la date
    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-ES", {

        year: "numeric",

        month: "short",
    
        day: "numeric"
    
    })

    return (

        <div className="w-[35rem] mt-16">
            
            <header className="pb-4 mb-4 border-b-2 border-stone-300">

                <div className="flex items-center justify-between">

                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>

                    { /* Mandamos un boton que al hacerle click lo elimninamos */ }

                    <button onClick={onDelete} className="text-stone-100 bg-red-500 hover:bg-red-300">Delete</button>

                </div>

                <p className="mb-4 text-stone-400">{formattedDate}</p>

                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>

            </header>

            { /* Mandamos las tareas (componente) con las propiedades de nuevas tareas, eliminar y las tareas */ }

            <Tasks onAdd={onAddTasks} onDelete={onDeleteTasks} tasks={tasks}></Tasks>

        </div>
    
    )

}

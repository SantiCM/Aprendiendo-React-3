import { Button } from "./Button"

// Componente del Sidebar 
// le mandamo sus propiedades

export const Sidebar = ({onStartAddProject, projects, onSelectProject, selectedProjectId}) => {


    return (

        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">

            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>

            <div>

                { /* Boton personalizado que al hacerle click empezamos un nuevo proyecto */ }

                <Button onClick={onStartAddProject}>+ Add project</Button>

            </div>

            <ul className="mt-8">

                { /* Mapeamos los proyectos */ }

                {
                    // mandamos una funcion
                    projects.map((project) => {

                        // mandamos la clase por defecto
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                        // si el proyecto que viene del id es seleccionado
                        if(project.id === selectedProjectId) {
                            
                            // mostramos esta clase
                            cssClasses += "bg-stone-800 text-stone-200"
                            
                            // si no
                        } else {
                            
                            // mandamos este estilo
                            cssClasses += "text-stone-400"
                        
                        }
                        
                        // retornamos
                        return (

                            // mandamos el key de la primera funcion que viene del id
                            <li key={project.id}>

                                <button 

                                    // al hacer click mandamos una funcion y flecha 
                                    // que manda el selecciobar proyecto que viene del proyecto que viene del id
                                    onClick={() => onSelectProject(project.id)}

                                    // mandamos la clase
                                    className={cssClasses}
                            
                                >   

                                    { /* Mostramos el titulo de ese proyecto que viene de el title */ }
                                    {project.title}
                                
                                </button>

                            </li>
                                   
                        )

                    }
                )}

            </ul>

        </aside>
    )


}

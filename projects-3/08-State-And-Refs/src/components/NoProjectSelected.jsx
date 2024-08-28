import noProjectImage from "../assets/no-projects.png"
import { Button } from "./Button"

// no esta seleccionado el proyecto
// recibimos el empezando el proyecto

export const NoProjectSelected = ( { onStartAddProject } ) => {
    
    return (
        
        <div className="mt-2 text-center w-2/3">

            { /* Mandamos la imagen */ }

            <img src={noProjectImage} alt="An empy task" className="w-16 h-16 object-contain mx-auto"></img>

            <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">No Project Selected</h2>

            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>

            <p className="mt-8">
                
                { /* Mandamos el Button personalizado que al hacerle click le damos que inicie un nuevo proyecto */ }

                <Button onClick={onStartAddProject}>Create New Project</Button>

            </p>


        </div>
    
    )

}
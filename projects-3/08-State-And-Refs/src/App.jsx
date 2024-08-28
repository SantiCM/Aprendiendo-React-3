import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";
import { SelectedProject } from "./components/SelectedProject";


const App = () => {

  // mandamos un estado donde mandamos un objeto el cual:
  // lleva el seleccionar un proyecto que se inicializa en undefined
  // los proyectos como array vacio
  // y las tareas tambien

  const [projectState, setProjectState] = useState({
    
    selectedProjectId: undefined,

    projects: [],

    tasks: []
  
  })


  // varibable para mostrar las tareas 
  // le damos como argumento el text
  const handleAddTasks = (text) => {
    
    // mandamos el segundo estado haciendo una funcion de la misma
    setProjectState((prevState) =>  {

      // mandamos un id random
      const tasksId = Math.random()

      // y hacemos una variable para definir como se veran las tareas
      const newTasks = {
        
        // el texto sera el text del argumento
        text: text,

        // que el id sera el prev de la primera funcion que viene de la especificacion del objeto del useStae
        projectId: prevState.selectedProjectId,

        // y el id sera el id generado (random)
        id: tasksId
      
      }
      
      // retornamos
      return {
        
        // la copia de esa variable
        ...prevState,

        // y las tareas seran un array que tendra la copia y las tareas
        tasks: [...prevState.tasks, newTasks]
      
      }
    
    })
  
  }

  // eliminar las tareas 
  // recibe el argumento de id 
  const handleDeleteTasks = (id) => {
    
    // el segundo estado recibe una funcion
    setProjectState((prevState) =>  {

      // retornamos
      return {
        
        // copia de la funcion anterior
        ...prevState,

        // y las tareas sera la funcion que viene de las tareas y con el metodo filter
        // Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
        // y recibe una funcion que le hacemos flecha de las tareas que viene del id y que sea diferente al id principal

        tasks: prevState.tasks.filter((tasks) => tasks.id !== id)
      
      }
      
    })
  
  }

  // seleccionar el proyecto
  // viene del id
  const handleSelectProject = (id) => {
    
    // mandamos el segundo estado que recibe una funcion de prevState
    setProjectState((prevState) => {

      // lo retornamos
      return {

        // le damos la copia de la antigua funcion
        ...prevState,
        
        // y decimos que la propiedad del objeto del useState sera igual al id
        selectedProjectId: id,

      }
    
    })
  
  }

  // comenzar un nuevo proyecto
  const handleStartAddProject = () =>  {

    // mandamos el segundo estado que recibe una funcion de prevState
    setProjectState((prevState) => {

      // retornamos
      return {

        // la copia de la funcion anterior
        ...prevState,
        
        // y decimos que la propiedad del objeto del useState sera igual a null
        selectedProjectId: null,

      }
    
    })
    
  }

  // Agregar proyecto le damos como argumento la data
  const handleAddProject = (projectData) => {
    
    // mandamos el segundo estado que recibe una funcion de prevState
    setProjectState((prevState) =>  {

      // mandamos un id random

      const projectId = Math.random()

      // mandamos un nuevo proyecto que contiene....
      const newProject = {
        
        // la copia de esa funcion 
        ...projectData,

        // y el id sera, el id generado
        id: projectId
      
      }
      
      // retornamos
      return {
        
        // la copia de la primera funcion
        ...prevState,

        // decimos que la propiedad del objeto del useState sera igual a undefined
        selectedProjectId: undefined, 

        // y los proyectos seran la copia de la primera funcion que viene de los proyectos y se da un nuevo proyecto
        projects: [...prevState.projects, newProject]
      
      }
    
    })
  
  
  }

  // cancelar el evento que esta haciendo el usuario

  const handleCancelAddProject = () => {
    
    // mandamos el segundo estado que recibe una funcion de prevState
    setProjectState((prevState) =>  {

      // retornamos
      return {
        
        // la copia de esa primera funcion
        ...prevState,

        // decimos que la propiedad del objeto del useState sera igual a undefined
        selectedProjectId: undefined, 
      
      }
      
    })
  
  }

  // eliminar un proyecto 
  const handleDeleteProject = () => {
    
    // mandamos el segundo estado que recibe una funcion de prevState
    setProjectState((prevState) =>  {

      // retornamos
      return {
        
        // la copia de esa primera funcion
        ...prevState,
        
        // decimos que la propiedad del objeto del useState sera igual a undefined
        selectedProjectId: undefined, 

        // y los proyectos
        // sera la primera funcion que viene de los proyectos que con el metodo filter
        // Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
        // y le mandamos una funcion y la flecha que esa misma funcion que viene del id sea diferente 
        // a la primera funcion que viene de la propiedad del primer estado
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      
      }
      
    })
  
  }

  // forma en js de encontrar un elemento array por su ID
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  // mandamos el seleccionar el proyecto con todas las propiedades
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTasks={handleAddTasks} onDeleteTasks={handleDeleteTasks} tasks={projectState.tasks}></SelectedProject>

  // Mostar el hacer el proyecto o no esta seleccionado ningun proyecto

  // si el primer estado que viene de el id seleccionado es igual a null
  if(projectState.selectedProjectId === null) {
    
    // mandamos el content de e componente de el "Nuevo Proyecto" con sus propiedades
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
    
    // si no, el primer estado que viene del id seleccionado sea igual a undefined
  } else if (projectState.selectedProjectId === undefined) {

    // se dara el componente que no esta seleccionado con sus propiedades
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  
  }

  return (
  
    <main className="h-screen my-8 flex gap-8">
      
      { /* Mandamos el sidebar (navegacion) con sus propiedades */ }
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}></Sidebar>

      { /* Y mandamos si se muestra o no */ }
      {content}
    
    </main>
  
  );

}

export default App;

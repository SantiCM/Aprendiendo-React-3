import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

// variable para hacer un nuevo proyecto
// recibe el add y el cancel
// eslint-disable-next-line react/prop-types
export const NewProject = ({ onAdd, onCancel }) => {

  // damos el ref del modal
  const modal = useRef()

  // en las siguientes 3 variables damos el ref
  // para el titulo, la descripcion y la fecha
  const titleRef = useRef();

  const description = useRef();

  const dueDate = useRef();

  // variable guardar la nota

  const handleSave = () => {

    // damos la referencia de cada uno de los campos de esta manera
    const enteredTitle = titleRef.current.value;

    const enteredDescription = description.current.value;

    const enteredDueDate = dueDate.current.value;

    // validacion

    // si el titulo, la descripcion y la date son iguales a ""
    if ( enteredTitle.trim() === "" || enteredDescription.trim === "" || enteredDueDate.trim() === "" ) {

      // mandamos el modal
      modal.current.open()
      
      // return necesario
      return;
    
    }

    // save
    onAdd({
      
      // hacemos que las entradas tengan sus nuevos valores
      titleRef: enteredTitle,

      description: enteredDescription,

      dueDate: enteredDueDate,
    
    });
  
  };

  return (

    <>

      { /*Mandamos el modal con la rederencia y el boton sera OK*/ }

      <Modal ref={modal} buttonCaption="OK">

        <h2 className="text-xl font-bold text-stone-900 mt-3 mb-5 text-center">Invalid Input</h2>

        <p className="text-stone-600 mb-4 font-bold text-xl text-center mt-4">Oops... looks like you forgot to enter a value</p>

        <p className="text-stone-600 mb-4 font-bold text-xl text-center mt-4">Please make sure you provide a valid value for every input field</p>

      </Modal>
      
      <div className="w-[35rem] mt-16">
      
        <menu className="flex items-center justify-end gap-4 my-4">
      
          <li>

            { /* El boton que al hacer click, cancela el proyecto */ }

            <button className="bg-red-500 px-6 py-2 rounded-md text-stone-100" onClick={onCancel}>
      
              Cancel
      
            </button>
      
          </li>

      
          <li>
      
            <button
      
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              
              // al hacer click lo guardamos

              onClick={handleSave}
            
            >
            
              Save
            
            </button>
          
          </li>
        
        </menu>

        <div>

          { /* Mandamos el componente del Input con su respectiva referencia y su label que sera que es cada entrada */ }

          <Input type="text" ref={titleRef} label="Title"></Input>

          <Input ref={description} label="Description"></Input>

          <Input type="date" ref={dueDate} label="Due Date"></Input>
        
        </div>
      
      </div>
    
    </>
  
  );

};
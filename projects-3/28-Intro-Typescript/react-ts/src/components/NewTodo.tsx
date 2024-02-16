import React, { useContext, useRef } from "react"
import { TodosContext } from "../store/todos-context";

type Props = {
    onAddTodo: (text: string) => void
}

// como no necesitamos un valor de retorno, damos void un retorno esperado de la disfusion     
// : React.FC<{ onAddTodo: (text: string) => void}>                                                              
export const NewTodo: React.FC  = () => {

    // damos el contexto 
    const todosCtx = useContext(TodosContext);

    // el todo del text viene del ref y vamos a impactar al elemento input en nulo
    const todoText = useRef<HTMLInputElement>(null)

    // al hacer submit damos que el evento es el formEvent de react
    const submittHandler = (event:React.FormEvent) => {

        // prevenimos
        event.preventDefault()

        // el "?" es porque la ref no esta necesariamente establecida en un valor, cuando se usa  
        // el "!"  es decir que ya se sabe el posible valor que nunca sera nulo              
        const enteredText = todoText.current!.value

        // si el texto es igual a 0 falla
        if(enteredText.trim().length === 0) {
            
            // error    

            // si no lo retornamos

            return
        }

        // el context se agrega y damos el texto
        todosCtx.addTodo(enteredText)
        
    } 
  
    return (
      
        <form className="form" onSubmit={submittHandler}>

            <label htmlFor="text">Todo Text</label>

            <input type="text" id="text" ref={todoText}></input>

            <button>Add Todo</button>

        </form>

    )

}
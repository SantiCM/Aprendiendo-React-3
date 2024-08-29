
// Componente del Input
// le damos el label para poner como se llama ese campo
// el id y la copia de las props
export const Input = ( { label, id, ...props }) => {
  
    return (
    
        <p className="control">

            { /* Damos el htmlFor del id y el label */}

            <label htmlFor={id}>{label}</label>

            { /* Damos el id y el name tambien como id, el required y la copia de las props */}

            <input id={id} name={id} required {...props}></input>

        </p>
  
    )

}
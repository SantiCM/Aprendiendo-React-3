// Componente del Error
// damos como propiedad el titulo y el mensaje
export const Error = ( {title, message } ) => {
  
    return (
        
        <div className="error">

            { /* Damos el titulo y el mensaje */}

            <h2>{title}</h2>

            <p>{message}</p>

        </div>
  
    )

}
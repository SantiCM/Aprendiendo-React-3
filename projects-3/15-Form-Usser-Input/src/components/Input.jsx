
// Damos un componente del input que recibe
// El label: "Nombre de el campo"
// su id, el error y la copia de las props
export const Input = ( { label, id, error, ...props } ) => {
  
    return (
        
        <div className="control-row">
        
            <div className="control no-margin">

                { /* Damos el id al form del html y el label del campo */ }

                <label htmlFor={id}>{label}</label>

                { /* Damos el id al id y la copia de las props (como el value y demas) */ }

                <input
            
                    id={id}
                
                    {...props}
            
                />

                <div className="control-error">

                    { /* Damos el error y si es true damos el error, el mensaje */ }

                    {error && <p>{error}</p>}
            
                </div>
        
            </div>
        
        </div>
    
    );
    
};
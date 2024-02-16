import { useState } from "react";

// USESTATE

export const Contador = () => {

    // damos un state donde damos el <que sea numero> 
    const [valor, setvalor] = useState<number>(0)

    // damoss una variable de acumular que recibe el numero que es un number
    const acumular = ( numero: number) => {
        
        // damos el segundo valor donde el primer estado suma el numero
        setvalor(valor + numero)
    
    }
  
    return (
        
        <>

            <h3>Contador:<small> {valor}</small></h3>

            {/*Damos un boton que al hacerle click damos una funcion y le damos la variable acumular
                y le damos que suma en 1 y en el de decrementar que reste -1 
            */}
            <button onClick={() => acumular(1)} className="btn btn-primary m-2">+1</button>

            <button onClick={() => acumular(-1)} className="btn btn-primary">-1</button>

        </>
  
    )

}
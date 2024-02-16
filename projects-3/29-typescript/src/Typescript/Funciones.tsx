export const Funciones = () => {

    // retorna void: no regresa nada o (undefined)
    // en este caso le decimos que el argumento a es numero
    // el argumento b es numero igual y todo tiene que retornar un numero
    const sumar = ( a: number, b: number ):number => {
        
        // retornamos a + b
        return a + b
    
    }
  
    return (
  
        <>

            <h3>Funciones</h3>

            {/*Damos la variable y recibe dos arggumentos, osea los dos numeros que queremos sumar*/}
           <span> El resultado es : {sumar(10, 2)}</span>
        
        </>

    )

}
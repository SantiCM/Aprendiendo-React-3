export const TiposBasicos = () => {

    // Damos una variable que es un string
    // En este caso si nosotros queremos que de un nombre a la variablle actualizada 
    // podemos dar el valor que ocupamos (en este caso number)
    //let nombre: string | number = "Santiago"
    // damos la actualizacion
    //nombre = 1212

    let nombre: string | number = "Santiago"

    const edad = 35

    const estaActivo:boolean = true

    // si nosotros queremos hacer uun arreglo
    // seria dar la variable, asignarle quue tipo sera y damos un "[]" para dar a entender
    // es un arreglo de strig, no puedes añadir otro tipo que no sea el ya mencionado
    const poderes: string[] = [ "Velocidad", "Volar", "Velocidad del agua"]
  
    return (
  
        <>
        
            <h3>Tipos Basicos</h3>

            {nombre}, {edad}, {(estaActivo) ?  "Activo" : "No Activo"}

            <br></br>

            {poderes.join(", ")}

        </>
  
    )

}
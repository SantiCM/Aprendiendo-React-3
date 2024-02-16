// type: no tan js 
// classs: Crear instancias en representacion a js 
// interface: no tan js

// como luce un objeto

// Damos la interface llamada persona
interface Persona {

    // damos los datos que necesitamos
    // el nombre que es string
    nombreCompleto: string;
    
    // la edad es numero
    edad: number;   

    // En este caso como le queremos dar otro objeto
    // lo mas combeniente es crear otra interface y darsela
    direccion: Direccion

    /*direccion: {
    
        pais: string;

        casaNo: number
    
    }*/

}

// Creamos la interface
// recibe la direccion, del pais y de el numero de la casa 
interface Direccion {

    pais: string;

    casaNo: number

}

// damos la variable
export const ObjetosLiterales = () => {

    // recojemos la interfaz del usuario de Persona
    const persona: Persona = {
        
        // damos los datos
        nombreCompleto: "Santiago", 

        edad: 35,
        
        direccion: {
            
            pais: "Mexico",
        
            casaNo: 615
        
        }
    
    }

    //persona.nombreCompleto = "1212"
 
    return (
 
        <>

            <h3>Objetos Literales:</h3>

            <code>

                <pre>

                    {JSON.stringify(persona)}

                </pre>

            </code>
        
        </>

    )

}
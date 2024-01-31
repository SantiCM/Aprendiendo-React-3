// Narrowing

// Asegurarse de tener el tipo correcto

// damos una funcion que recibe param de objeto que puede ser numero o string
function mostrarLongitud(objeto: number | string) {

    // si el tipo es string, podemos utilizar sus propiedades
    if( typeof objeto === "string" ) {

        return objeto.length
    }

    // y ya despues el obj fuera de el if sera number
    return objeto.toString().length

}

mostrarLongitud("1")

interface Mario{

   name: string, saltar:() => void

}

interface Sonic{

    name: string, correr:() => void
}

type Personaje = Mario | Sonic

function checkIsSonic(personaje: Personaje) : personaje is Sonic {

    return (personaje as Sonic).correr !== undefined

}

function jugar(personaje: Personaje)  {

    if(checkIsSonic(personaje)) {
        
        personaje.correr()

    }
    
}
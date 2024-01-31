// funciones

/*

PORQUE ES DE TPO ANY, Y TS, LO IGNORA

function saludar(name) {

    console.log(`Hola ${name}`)
    
}

saludar("Pepe")

saludar(2)

*/

// forma correcta
function saludar(name:string) {

    console.log(`Hola ${name}`)
    
}

saludar("Pepe")

//saludar(2) No se puede asignar un argumento de tipo "number" al parámetro de tipo "string"
const nombre = "Santiago";
const apellido = "Melo";

//const nombreCompleto = nombre + " " + apellido ;
//const nombreCompleto = `Hola mundo, mi nombre completo es ${nombre} ${apellido}`
const nombreCompleto = `${ nombre }  ${ apellido }`;

console.log(nombreCompleto)

function getSaludo (nombre) {
    return "Hola " + nombre;
}

console.log(`Este es un texto que dice: ${getSaludo(nombre)}`)
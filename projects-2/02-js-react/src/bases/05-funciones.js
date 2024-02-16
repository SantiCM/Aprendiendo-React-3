// Funciones en JS

const saludar = function (nombre) {
    return `Hola soy ${nombre}`
}

/*const saludar2 = (nombre) => {
    return `Hola soy ${nombre}`
}*/


// Si solo hay un return ....
const saludar2 = (nombre) => `Hola soy ${nombre}`
// O
const saludar3 = () => `Hola Mundo`;


//console.log(saludar("Santiago"))
console.log(saludar("Santi"))
console.log(saludar2("Cena"))
console.log(saludar3());

const getUser = () => {
    return {
        id: 23232323,
        username: "Hola_bro",
    }
} 

console.log(getUser())

function getUsuarioActivo (nombre) {
    return {
        uid: "aaaaaaa",
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo("Santiago");
console.log(usuarioActivo)


// Con funcion flecha y devolviendo un objeto implicito
const getUsuarioActivo2 = (nombre) => ({
        uid: 363636363,
        username: nombre,
})

const usuarioActivo2 = getUsuarioActivo2("Santi")
console.log(usuarioActivo2)
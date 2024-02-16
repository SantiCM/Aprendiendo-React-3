// mandamos una constante, le damos el require y el path del archivo
// y en el caso de que haya muchas cosas que exportar, le desesetructuramos
const { sum } = require("./sum")

console.log("Hola Mundo")

console.info("Hola")

// variable global en toda nuestra aplicacion
console.log(globalThis)
console.log(sum(1, 2))

// patron de diseño
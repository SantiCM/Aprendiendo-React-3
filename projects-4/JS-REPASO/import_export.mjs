const chancho = ["Chancho 1", "Chanco 2", "Chancho 3"] // Formas de declarar un array
/*export const chanchosTristes = ["Triste 1, Triste 2, Triste 3"]*/ 
const chanchosTristes = ["Triste 1, Triste 2, Triste 3"]
const otrosChanchos = []

/* module.exports = chancho // Forma antigua, solo una variable 
module.exports = {
    chancho,
    chanchosTristes
}*/

// Tambien se puede importar una funcion y variable
const fn1 = () => {
    console.log("Soy la funcion 1");
}

function fn2() {
    console.log("Soy la funcion 2");
}

// Exportar
export {chanchosTristes, otrosChanchos, fn1, fn2}
export default chancho
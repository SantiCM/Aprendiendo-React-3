// Asersiones de tipos

// decimos que vamos a recojer el elemento canvas
// pero en este caso provocamos el error
// dando un span
const canvas = document.getElementById("span")

// para estar 100 por cien seguros de que esto es un canva, o mas bien 
// que esto pase cuando realmente sea el elemento canvas 
// damos el "instanceof" de HTMLCanvasElement
if( canvas instanceof HTMLCanvasElement ) {

    // y aqui ya lo utilizamos 
    const ctx = canvas.getContext("2d")

}  
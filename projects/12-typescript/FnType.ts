// ¿Como se pueden tipar funciones con parametros?

// en este caso lo normal seria hacer esto

/* 

function saludar2({ name, age }) {

    console.log(`Hola ${name}, tienes ${age} años`)

}
EL PROBLEMA DE ESTO ES QUE ES UNA FORMA DE DECIR QUE ES "ANY"
ENTONCES EL LENGUAJE NO LO RECONOCE
*/

/* --------------------------------------------------------------------------------------- */

// FORMA CORRECTA 1 ------------------------------------------
function saludar2({ name, age }: { name: string, age: number }) {

    console.log(`Hola ${name}, tienes ${age} años`)

}

saludar2({ name: "santi" , age: 9})

/* --------------------------------------------------------------------------------------- */

// FORMA CORRECTA 2 ------------------------------------------
// AL HACERLO ASI TENDRIAS QUE DESUSTRUCTURAR LAS PROPIEDADES DE "PERSONA"
function saludar3(persona : { name: string, age: number }) {

    const { name, age } = persona

    console.log(`Hola ${name}, tienes ${age} años`)

}

saludar3({ name: "santi" , age: 9})

/* --------------------------------------------------------------------------------------- */

// ¿COMO RETORNAR ALGO?
// en este caso se pueda dar el name y age como parametro
// y decir sus tipos y fuera decir que de un tipo number
// return age SI, return name NO
function saludar4({ name, age }: { name: string, age: number }): number {

    console.log(`Hola ${name}, tienes ${age} años`)

    return age

}

/* --------------------------------------------------------------------------------------- */

// VOID -> Cuando no devuelve nada

// en este caso seria decir que el fn, sea una funcion que recibe el name y que da el void
const saludar5 = (fn: (name:string) => void) => {

    fn("Ho")

}

// llamamos la funcion, le damos el name y ahora si lo reconoce
saludar5((name) => { console.log(`Hola ${name}`) })
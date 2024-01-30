// TIPOS

const cadena = "hola"

//let cadena:string = "hola"

// NO SE LE PUEDE ASIGNAR UNA PROPIEDAD QUE NO EXISTE PARA ESE TIPO
// cadena.toFixed Nooo

// NO SE PUEDA DAR OTRO VALOR QUE NO SEA EL STRING EN ESTE CASO
// cadena = 6 -> El tipo 'number' no se puede asignar al tipo 'string'

const number = 4

const indefinido = undefined

const boolean = true // or false

const obj = {}

const array = []

// Que pasa con el tipo any? 
// es una forma de decirle a typescript que lo ignore
// y que pasa desapercibido el lenguaje del tipado
const persona:any = "hola"

// INTERFERENCIA
// no es necario darle el :number
// porque lo infiere sin decirle nada
// el lenguaje lo toma como numero
const a = 1

const b = 3

const c = a + b
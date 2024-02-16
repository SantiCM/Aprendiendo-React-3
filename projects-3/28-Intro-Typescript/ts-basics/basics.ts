// Primitivas: number, string, boolens
// Array, Objects

// Damos la edad
// la forma de decir que queremos un valor
// es :"valor"
let age: number //= 24 

// damos el valor de arriba de numero
age = 12

// lo mismo damos el name que es string
let userName: string

// damos un strinng
userName = "Santi"

// damos un valor boleano
let isInstructor: boolean

// damos ese valor
isInstructor = true

//let hobbies: null

// Complex Types [] y {}

// forma de dar un array
// en este caso es un array de cadena de texto
let hobbies: string[]

// damos el array
hobbies = ["Sports", "Cooking"]

// damos un tipo que es un array
type Person = { 

    // el nombre como string
    name: string,

    // la edad es numero
    age: number

}

// damos la variable de el type
let person: Person

// damos un arreglo
person = {

    name: "Max",

    age: 32
}

/*person = {

    isEmpty : true

}*/

// otro objeto
let people: { 

    name: string,

    age: number

}[]

// Interferencia de tipos

// Tipos de Union: Permite tener mas de 1 tipo de definicion 

// forma de decir que que queremos mas valores
let course: string | number = "React-Complete"

course = 12121

// Funciones y tipos

const add1 = ( a: number , b:number )/*: number*/ => {

    return a + b
}

// retorno especial
// void: comparable a nu y definifo, la difusicion nunca regresa
const print1 = ( value: any ) => {

    console.log(value)
    
}

// Generics

// le decimos que tiene una funcion y se la damos al argumento
const insertAtBenning = <T>(array: T[], value:T ) => {

    // el nuevo array es el array del valor y de la copia del array
    const newArray = [value, ...array]

    // lo retornamos
    return newArray

}    

// damos el array de numeros
const demoArray = [1,2,3,4,5]

// damos el nuevo array y le damos el array de arriba
const updatedArray = insertAtBenning(demoArray, -1)

// en este caso funciona porue damos un elemento fuera "d"
const stringArray = insertAtBenning(["a", "b", "c"], "d")

//updatedArray[0].split("")
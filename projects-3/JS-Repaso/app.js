// VARIABLES
// con camelCase

let userMessage = "holaa"

const userMessage2 = "holaa"

// Operadores
/*

+, -, *, /, %

=== : debe ser igual

!== : diferenete a 

> o <

<= o >= 

*/

/*if(10 === 10) {

  console.log("works")

}*/

/*

Funciones

function greet(user, message) {

    console.log("hla")

}


greet()*/

// Funciones anonimas

/*const name = (userName, message) => {

    return userName + message

}*/

// Objetos
const user = {

    name: "Santi", 

    age: 18,

    greet(){
        
        console.log("Hola")
    
    }

}

console.log(user)

user.greet()


class User {

    constructor(name, age) {
    
        this.name = name
        
        this.age = age
        
    }

    greet() {
        
        console.log("Hola!")
    
    }

}

const user1 = new User("Hola", 45)

user.greet()

// Arrays

const hobbies = [

    "Sports",

    "Reading",

    "Cooking"

]

// Añadir un nuevo array
hobbies.push("Working")

// Encontrar elementos el array en su posicion
const index = hobbies.findIndex((item) => {

    return item === "Sports"

} )

// Tranforma un elemento de un array en otro elemento para ese arrat

const edit = hobbies.map((item) => ({text: item}))

console.log(edit)

// editArray
const numbers = [1, 2, 3]

const editArray = numbers.map((item) => ({val: item}) )

console.log(editArray)

// function con return

function toggle(numberArray) {

    return numberArray.map((num) => {

        return {val: num}
    
    })

}

// desustruracion

/// con arrays
//const [firstName, lastName] = ["Santi", "Cano"]

//console.log(firstName, lastName);

//const firstName = userNameData[0]

//const lastName = userNameData[1]

// con objeto
//const {name, age}  =  { name: "Max", age: 34}

//console.log(name, age)

// Spread Operator
// Copia del elemento con "..."

//const hobbies2 = ["Esribir", "Deporte"]

//const newHobbies = [...hobbies2]

//console.log(newHobbies)

// ESTRUCURAS DE CONTROL

//const password = prompt("Pon tu contraseña")

if(password === "Holaaaaaaa") {

    console.log("Contraseña correcta")

} else if (password === "123456") {

    console.log("Contraseña Incorrecta")

} else {

    console.log("No pasas")

}


// For, se ejecuta varias veces

const hobbies3 =  ["Sports", "Cooking"]

for(const hobby of hobbies3) {

    console.log(hobby);

} 


function handleTimeout() {

    console.log("1")

}

const handleTimeout2 = () => {

    console.log(2)

}

setTimeout(handleTimeout, 4000)

setTimeout(handleTimeout2, 4000)

setTimeout(() => {

    console.log(3)


}, 4000)


// defirnir funciones dentro de funciones

/*function init() {

    function greet() {
        
        console.log("Hi")
    
    } 

    // se ejecuta 
    greet()

}

init()*/

// no cambia el valor principal
let mesagge = "hello"

userMessage = "Hello there"

// Valores de referencia primitivos
// es permitido cambiar su valor aunque sea const
const hobbbies = ["Sports", "Working"]

hobbies.push(["Worjing"])
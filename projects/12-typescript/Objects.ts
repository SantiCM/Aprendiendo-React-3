// OBJETOS

// damos un objeto clasico
let hero = { name: "thor", age: 50 }

// damos una funcion donde como parametro damos el name como string y el age como number
// y retornamos ambos
function createHero(name: string, age:number) { return { name, age } }

// damos esto
const thor = createHero( "Thor", 1550 )

/* --------------------------------------------------------------------------------------- */

// TYPE ALIAS

// damos un tipo que reciba el name y el age con sus tipos
type Hero = { name: string, age: number }

// damos el objeto en base a Hero ": Hero", damos los valores
let hero2 : Hero = { name: "thor", age: 50 }

// hacemos una funcion donde damos como parametro el name y el age
// que retorna el tipo de Hero, ": Hero", damos el retorno
function createHero2( name: string, age: number ) : Hero { return { name, age } }

// mostramos
const thor2 = createHero2("Thor", 1550)

/* --------------------------------------------------------------------------------------- */

// damos un tipo que reciba el name y el age con sus tipos
type Hero1 = { name: string, age: number }

// damos el objeto en base a Hero ": Hero", damos los valores
let hero3 : Hero1 = { name: "thor", age: 50 }

// hacemos una funcion donde damos como parametro un hero en base al type "hero : Hero1"
// que retorna el tipo de Hero, ": Hero", damos el retorno
function createHero3(hero : Hero1) : Hero1 {

    const { name, age } = hero

    return { name, age }

}

const thor3 = createHero3({ name: "Thor", age: 15 })

/* --------------------------------------------------------------------------------------- */

// OPTIONAL PROPERTIES

type Hero2 = { 

    //                         al poner el ?, es decir que la propiedad es opcionable
    // readonly -> solo de lectura
    // no acceder a alguien mas a escribir un nuevo valor
    readonly id?:number, name: string, age: number, isActive?:boolean

}

let hero4 : Hero2 = { name: "thor", age: 50 }

function createHero4(hero : Hero2) : Hero2 {

    const { name, age } = hero

    return { name, age, isActive: true }

}

const thor4 = createHero4({ name: "Thor", age: 15 })

// optional chaining -> encadenamiento opcional
// existe?
thor4.id?.toString()

/* --------------------------------------------------------------------------------------- */

// TEMPLEATE UNION TYPES

// EJEMPLO

type HexadecimalColor = `#${string}`

const color:HexadecimalColor = "#01010"

const color1: HexadecimalColor = "#10101"

/* --------------------------------------------------------------------------------------- */

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero3 = { 

    //                         al poner el ?, es decir que la propiedad es opcionable
    // readonly -> solo de lectura
    // no acceder a alguien mas a escribir un nuevo valor
    readonly id?:HeroId, 
    
    name: string, age: number, isActive?:boolean

}

let hero5 : Hero3 = { name: "thor", age: 50 }

function createHero5(hero : Hero3) : Hero3 {

    const { name, age } = hero

    return { id:crypto.randomUUID(), name, age, isActive: true }

}

const thor5 = createHero5({ name: "Thor", age: 15 })

// optional chaining -> encadenamiento opcional
// existe?
thor5.id?.toString()
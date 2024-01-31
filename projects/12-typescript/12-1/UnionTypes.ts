// Union de los tipos

// tipo de id seria de decir que se recibe un string por -
type HeroId1 = `${string}-${string}-${string}-${string}-${string}`

// Uno u otro

// podemos decir que este tipo sea cualquiera de estos valores
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal"

// otro ejemplo, pero en tipos
let ann:number | string

ann = "hola"

ann = 16

type Hero4 = { 

    //                         al poner el ?, es decir que la propiedad es opcionable
    // readonly -> solo de lectura
    // no acceder a alguien mas a escribir un nuevo valor
    readonly id?:HeroId1, 
    
    name: string, age: number, 
    
    isActive?:boolean, powerScale?:HeroPowerScale

}

let hero6 : Hero4 = { name: "thor", age: 50 }

// funcion, que da como parametro, el hero que recibe el type
// del objeto y retorna eso mismo

function createHero6(hero : Hero4) : Hero4 {

    const { name, age } = hero

    return { id:crypto.randomUUID(), name, age, isActive: true }

}

const thor6 = createHero6({ name: "Thor", age: 15 })

thor6.powerScale = "galactic"
// Intersection types
 
// tipo de id seria de decir que se recibe un string por -
type HeroId2 = `${string}-${string}-${string}-${string}-${string}`

// Uno u otro

// podemos decir que este tipo sea cualquiera de estos valores
type HeroPowerScale1 = "local" | "planetary" | "galactic" | "universal" | "multiversal"

// otro ejemplo, pero en tipos
let annn:number | string

annn = "hola"

annn = 16

// damos un type que recibe una info
export type HeroBasicInfo = {

    name: string, age: number, 

}

// un tipo que recibe otra info
export type HeroProperties = { 

    // al poner el ?, es decir que la propiedad es opcionable
    // readonly -> solo de lectura
    // no acceder a alguien mas a escribir un nuevo valor
    readonly id?:HeroId2,  isActive?:boolean, powerScale?:HeroPowerScale1

}

// AND, osea que este tipo sea igual a una info y la otra info
type Hero5 = HeroBasicInfo & HeroProperties

// funcion, que da como parametro, el input que sea de tipo info, osea
// en este caso porque solo recibimos esas propiedaes
// y retorna el tipo que que recibe las 2 infos
function createHero7(input : HeroBasicInfo) : Hero5 {

    // desustructuracion
    const { name, age } = input

    // retorna todoooo
    return { id:crypto.randomUUID(), name, age, isActive: true }

}

const thor7 = createHero7({ name: "Thor", age: 15 })

// validoooo
thor7.powerScale = "galactic"
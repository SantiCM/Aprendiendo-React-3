// ARRAYS

// este seria una forma de decir que un array sea de string
const languages:Array<string> = [] // que siempre este vacio

// o 👇🏻

//const languages:string[] = [] // que siempre este vacio

// SI QUEREMOS UN ARREGLO CON MAS DE 1 TIPO

// seria dar los tipos que queremos, dar [] y que sea array vacio
const languages1: (string | number)[] = [] // que siempre este vacio

languages1.push("Holaaa")

languages1.push(2)

/* --------------------------------------------------------------------------------------- */

// TIPAR

type HeroId2 = `${string}-${string}-${string}-${string}-${string}`

type HeroPowerScale2 = "local" | "planetary" | "galactic" | "universal" | "multiversal"

export type HeroBasicInfo = {

    id?:number, name: string, age: number, 

}

// seria decir que esta constante se base en mi type [] y decir como arreglo vacio
const heros: HeroBasicInfo[] = []

/* --------------------------------------------------------------------------------------- */

/*
[
    ["X", "0", "X"],
    ["O", "x", "O"],
    ["X", "0", "O"],

]
*/

// dar un tipo que sea este y este y este
type CellValue = "X" | "O" | ""

// tuplas
type GameBoard = [

    // posiciones 
    [CellValue, CellValue, CellValue], 

    [CellValue, CellValue, CellValue], 
    
    [CellValue, CellValue, CellValue],

]

// dan un arreglo
const gameBoard: GameBoard = [

    // opciones
    ["X", "O", "X"], 
    
    ["O", "X", "O"], 
    
    ["X", "O", "O"]

]

// Tuplas

// el typo es decir que sea string y dar una funcion que sea string que no retorne nada
type State = [string, (newName: string) => void]

const [hero, setHero]: State = useState("thor")

// por ejemplo, dar una tupla que sea de 0,1,2 de number
type RGB = [number, number, number]

// esta constante sera de rgb y damos los numero
const rgb:RGB = [ 255, 255, 0 ]

//const rgb1:RGB = [ sa, 255, hola, "df" ]
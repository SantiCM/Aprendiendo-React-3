
const futbolistas = [
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Neymar"
];

// Con "," ignorar el anterior elemento
const [ , , p3 ] = futbolistas;

const retornarArreglo = () => {
    return ["ABC", 123]
}

const [ letras, numeros] = retornarArreglo();
console.log(letras, numeros)

console.log(p3)

console.log(futbolistas[0])

console.log(futbolistas[1])

console.log(futbolistas[2])

const useState = (valor) => {
    return [
        valor, () => {console.log("Hola mundo")}
    ]
} 

const [nombre, setNombre] = useState("Santi")
console.log(nombre)
setNombre();

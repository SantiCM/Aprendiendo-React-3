// Desestrucuracion
// Asignacion Desustrucutrante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
}

const { nombre, edad, clave } = persona;

console.log(nombre)
console.log(edad)
console.log(clave)

const useContext = ({nombre, edad, clave, rango = "Capitan"}) => {

    //console.log(nombre, edad, clave, rango)
    return {
        nombreClave : clave,
        años: edad,
        lating: {
            lat: 14.646464,
            lgn: -11.11111,
        }
    }
}

const {nombreClave, años, lating:{lat, lgn}}= useContext(persona);
 
console.log(nombreClave, años)
console.log(lat, lgn)
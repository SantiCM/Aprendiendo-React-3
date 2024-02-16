/*const Rectangulo = class R {

}*/
 // Clases declardas con class no tienen hoisting
class Rectangulo {}

// HOISTING
// Y esto es cuando tomamos variables definidas con var
// y funciobes definida con function 
// y las lleva al comienzo del archivo

/*console.log(Cuadrado);
function Cuadrado () {}
console.log(Rectangulo, Cuadrado);*/

const r = new Rectangulo()

class chancho {
    propiedad = "miPropiedad"
    #hambre 
    static estatico = 42
    constructor(estado = "feliz", hambre = false) { // Estado = "feliz" valor por defecto
        this.estado = estado
        this.#hambre = hambre
    }

    hablar () {
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`);
    }

    static comer () {
        console.log(this.estatico, "Estoy comiendo!");
    }
}

chancho.comer()
const feliz = new chancho("feliz")
// console.log(feliz.__proto__);
/*feliz.hablar()
console.log(feliz);*/
const triste = new chancho ("triste")
// triste.hablar()
const nose = new chancho()
// nose.hablar()
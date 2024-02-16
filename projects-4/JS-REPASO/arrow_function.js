// Funciones que se DECLARAN con la palabra reservada "FUNCTION"
/*function Fn() {
    // { prop: "propiedad"}
    this.prop = "propiedad"
}*/

/*Fn.prototype.lala = function FuncionDePrototipo() {}

const r = Fn()

/*console.log(r.__proto__);*/

// Fat arrow function

const fatFn = () => { // NO TIENE CONTEXTO DE THIS
    
}

const r1 = fatFn()

console.log(r1);

// DI
// Las arrow function no se puede utilizar el new, solo en function

const Frn = () => 2 
// Las fat arrow funtion tienen un return implicito que hace que no se necesiten las llaves que es lo mismo a hacer un return de "2"
// Ademas que no tienen this = contexto

console.log(Frn());
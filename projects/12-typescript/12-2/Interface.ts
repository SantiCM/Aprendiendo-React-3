// Interfaces

// Interfaz clasica
interface Heroe {
    
    id: string, name: string, age: number, saludar: () => void
}


const hero: Heroe = {

    id: "1", name: "Santi", age: 19, saludar: () => { console.log("hola") }

}

/* --------------------------------------------------------------------------------------- */

// interface
interface Producto{

    id: string, name: string, age: number, quantitiy: number

}

// podemos hacer que otra interface tenga las propiedades de ella
// extendiendo "extends"
interface Zapatilla extends Producto{ talla: number }

// y otra interface, puede ser que los productos sean la 1 interface o la segunda y sera un array
interface CarritoDeCompras{

    totalPrice:number, productos:(Producto | Zapatilla)[]

}

// interface
interface CarritoOps {

    add: ( product: Producto ) => void, remove: ( id: number ) => void, 
}

// PARA NO TENER EL PROBLEMA DE QUE ES EL MISMO NOMBRE 
// PODEMOS EXTENDER LA INTERFACE DE ARRIBA Y DUPLICARLA

interface CarritoOps { clear: () => void }


const carritoLoco: CarritoDeCompras = {

    totalPrice: 100,

    productos: [{ id: "1", name: "Santi", age: 19, quantitiy: 1, talla: 10 }]

}

// una funcion que recibe como parametro una "x"
// que puedes ser string o numero
function fn(x: string | number) {

    // si el tipo es string, podemos utilizar sus propiedades
    if( typeof x === "string" ) {
    
        // x es string

        x.toLocaleUpperCase()
        
        // si el tipo es number, podemos utilizar sus propiedades
    } else if( typeof x === "number" ) {
        
        // x es number

        x.toLocaleString()

        // y si no por default, sera NEVER
    } else { x }

}
// NEVER
// SE ENTIENDE COMO UNA FORMA DE DECIR QUE ESTA FUNCION NO HACE NADA, NI RETORNA NADA

function throwError(message: string) : never {

    throw new Error(message)

}
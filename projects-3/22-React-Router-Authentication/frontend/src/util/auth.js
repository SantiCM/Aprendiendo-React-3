import { redirect } from "react-router-dom"

// token y su duracion
export const getTokenDuration = () => {

    // el token se expira cuando el local storage de el getitem de la expiracion
    const storedExpirationDate = localStorage.getItem("expiration")

    // la expiracion sera la nueva fecha de esa fecha expirada
    const expirationDate = new Date(storedExpirationDate)

    const now = new Date()

    // getTime: me da el valor del tiempo en milisegundos 
    // la marca de tiempo actual esque existe el token
    // y el valor negativo es que el token expiro
    const duration = expirationDate.getTime() - now.getTime()

    // retornamos la duracion
    return duration

}

// damos el auth del token
export const getAuthToken = () => {

    // el token se da del local storage 
    const token = localStorage.getItem("token")

    // si el token no existe damos un retorno nulo
    if(!token) {
        
        return null
    
    }

    // la duracion del token sera la primera variable 
    const durationToken = getTokenDuration()

    // si la duracion del token es menor a 0
    if(durationToken < 0) {
        
        // se expira
        return "EXPIRED"
    
    }

    // damos el token nuevo
    return token

}

// el loader del token 
export const loaderToken = () => {

    // el token es auth de inicio
    const token =  getAuthToken()

    // y lo retornamos
    return token

}

//check del loader
export const checkAuthLoader = () => {

    // el token es auth de inicio
    const token = getAuthToken()

    // si no hay token
    if(!token) {
        
        // retornamos la redireccion al auth
        return redirect("/auth")
    
    }

}
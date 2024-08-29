
// Aqui vamos a utilizar axios para llamar al backend

import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

// desestructuración de la variable de entorno que viene del archivo donde manejos las apis
const { VITE_API_URL } = getEnvVariables()

// varibble que hace que se crea un axios 
const calendarApi = axios.create({

    // con el 
    // url preconfigurado
    baseURL: VITE_API_URL

})

// esa variable, la interceptamos, como peticion request que usa
// mandamos un callback que sea la copia de config.headers (postman)
// y el header que es "x-token" que viene del localStorage como token
calendarApi.interceptors.request.use(config => {

    config.headers = {

        ...config.headers,
    
        "x-token" : localStorage.getItem("token")
    
    }

    // retornamos el config
    return config

})

export default calendarApi
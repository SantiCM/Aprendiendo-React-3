
// mandamos las variables 
export const getEnvVariables = () => {
    
    // SIEMPRE 
    import.meta.env

    return {
    
        // Variable de entorno de la url de la api
        VITE_API_URL : import.meta.env.VITE_API_URL,

        // Variable de entorno del test
        VITE_MODE :  import.meta.env.VITE_MODE,

    
    }

}

import { useCallback, useEffect, useState } from "react"

// HOOK PARA PETCION HTTP

// damos como argumento el url y la config, (asincrono)
const sendHttpRequest = async(url, config) => {

    // damos como respuesta el await del fecth de los argumentos de arriba
    const response = await fetch(url,config)

    // damos la respuesta de la data del await de la respuesta del json
    const resData = await response.json()

    // si no existe la respuesta
    if(!response.ok) {
        
        // damos el error del backend 
        throw new Error(resData.message || "Something went wrong, failed to send request")
    
    }

    // retornamos la respuesta de la data
    return resData

}

// HOOK PARA PETCION HTTP +++

// damos el url, config, y un inicial valor
export const useHttp = (url, config, initialData) => {

    // damos el estado del error
    const [error, setError] = useState()

    // damos el estado de la carga en falso
    const [isLoanding, setIsLoanding] = useState(false)

    // damos el estado de la data y le damos ese valor inicial
    const [data, setData] = useState(initialData)

    // eliminar data, el segundo estado, le damos el inicial valor
    const clearData = () => {
    
        setData(initialData)
    
    }

    // respuesat http
    // Utilizamos el useCallback y le damos el asyn y como argumento la data
    const sendRequest = useCallback(async function sendRequest (data)  {

        // mandamos el segundo estado de la data en true
        setIsLoanding(true)

        // try and catch
        try {

            // damos la respuesta de la data del await de la variable de arriba, damos el url, y como objeto la copia de config y el body su data
            const resData = await sendHttpRequest(url, {...config, body: data})

            // damos el segundo estado y le damos la data
            setData(resData)
            
            // si falla
        } catch (error) {

            // damos el segundo estado y le damos el error del backend
            setError(error.message || "Something went wrong")
            
        }

        // damos el segundo estado de carga en falso
        setIsLoanding(false)
        
        // damos la dependencia del url y el config (necesarias)
    }, [url, config])  

    // damos un efecto donde
    useEffect(() => {

        // si la config es true damos que si el config del metodo es GET y no existe el metodo y no existe la config
        if((config && (config.method === "GET" || !config.method)) || !config) {
            
            // damos la varible de arriba
            // osea que todo lo que no sea get se ejecutara esta funcion
            sendRequest()
        
        }

        // damos como dependencia el sendRequest que ocupamos de arriba y el config
    }, [sendRequest, config])

    // retornamos todos los estados
    return {
    
        data,

        isLoanding,

        error,

        // damos la variable de arriba
        sendRequest,
        
        clearData
        
    }
  
}
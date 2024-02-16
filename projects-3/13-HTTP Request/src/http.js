// peticion http para ver si los lugares son disponibles

// asincrona
export const fecthAvailablePlaces = async () => {

    // damos una variable donde mandamos la peticion
    const response = await fetch("http://localhost:3000/places")

    // y la data que viene del await de la respuesta que se pasa al json
    const resData = await response.json()

    // respuesta satisfactoria 200/300, NO: 400/500
    if(!response.ok) {
        
        // mandamos el error
        const error = new Error("Failed to fecth places")

        throw error

          
    }

    // retornamos la data de los lugares
    return resData.places

}

// actualizar los lugares visitados del fecth
// damos el asyn y los lugares
export const updateUserPlaces = async (places) => {

    // damos la peticion http
    const response = await fetch("http://localhost:3000/user-places", {

        // metodo para que la peticion http, pase, en este caso put
        method: "PUT",

        // body, es lo que queremos que se muestre en el body (en el cuerpo de la peticion)
        body: JSON.stringify({places: places}),

        // Metadatos adicionales que se adjuntan a la solicitud
        headers: {
        
            "Content-Type" : "application/json"
        
        }

    })

    // damos la data
    const resData = await response.json()

    // respuesta satisfactoria 200/300, NO: 400/500
    if(!response.ok) {
        
        const error = new Error("Fail to update user data")

        throw error

          
    }

    // retornamos la data del error (messagge)
    return resData.message

}

// ver los lugares de los usuarios

export const fecthUsersPlaces = async () => {

    // damos la respuesta de la peticion
    const response = await fetch("http://localhost:3000/user-places")

    // y la data que viene del await de la respuesta que se pasa al json
    const resData = await response.json()

    // respuesta satisfactoria 200/300, NO: 400/500
    if(!response.ok) {

        // damos el error
        const error = new Error("Failed to fecth places")

        throw error

          
    }

    // retornamos la data de los lugares
    return resData.places

}
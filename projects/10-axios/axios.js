const obtenerPeliculas = async() => {

    try {

        const respuesta = await axios.get("https://api.themoviedb.org/3/movie/popular", {

            // parametros
            params: { api_key: "5c66ff86f50f63bc1ee29948a86c3b86", language: "es-MX" },

            // encabezados, api de auth
            //headers: { "Authorization": "Bearer" }
    
        })

        console.log(respuesta)
        
    } catch (error) {

        console.log(error);

    }


}

obtenerPeliculas()
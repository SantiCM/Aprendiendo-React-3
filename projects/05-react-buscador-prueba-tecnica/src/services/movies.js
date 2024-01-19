
const API_KEY = "dd95c532"

/// peticion de las movies, damos el async y le damos el search
export const searchMovies = async ({search }) => {

    // si el search es igual a cadena vacia, retornamos null, osea nada
    if(search === "") return null

    try {

        // recojemos la respuesta del await de fetch de la apikey y damos el search, osea la busqueda del usuario
        const response = await fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)

        // lo volvemos json
        const json = await response.json()

        // y hacemos que las movies aparezcan si hay busqueda
        const movies = json.Search

        // retornamos las movies y le damos mapaeo
        return movies?.map(movie => ({
            
            // damos propias propiedades al mapeo
            id: movie.imdbID, title: movie.Title,

            poster: movie.Poster, year: movie.Year

        }))

        // si falla damos el error
    } catch (error) {

        throw new Error ("Error seaching")
        
    }

}
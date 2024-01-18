import responseMovies from "../mocks/with.results.json"

export function useMovies() {

    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
    
        id: movie.imdbID,

        title: movie.Title,

        poster: movie.Poster,

        year: movie.Year

    }))

    return { movies: mappedMovies }

}
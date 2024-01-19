
// componente de lisatr las movies, 
//recojemos las movies
export function ListOnMovies({ movies }) {
  
  return (
  
    <ul className="movies">
      
      {/*Damos el mapeo de las movies */}
      {movies.map((movie) => (
   
        <li className="movie" key={movie.id}>
        
          <h3>{movie.title}</h3>

          <p>{movie.year}</p>

          <img src={movie.poster} alt={movie.title}></img>
        
        </li>
      
      ))}
    
    </ul>
  
  );

}

// componente no hay movies
export function NoExtingMovies() {

  // retornamos un texto, no hay nadaaaa
  return (<p>No se encontraron resultados</p>);

}

// componente de las peliculas listas, recoje las movies
export function Movies({ movies }) {

  // si las movies, son mayores a 0
  const hasMovies = movies?.length > 0;

  // retornamos la constante de arriba si pasa damos el primer componente com las movies y si no
  // el componente de no hay movies
  return hasMovies ? ( <ListOnMovies movies={movies}></ListOnMovies>) : ( <NoExtingMovies></NoExtingMovies>);

}
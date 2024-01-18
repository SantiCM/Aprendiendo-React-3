export function ListOnMovies({ movies }) {
  
  return (
  
    <ul className="movies">
   
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

export function NoExtingMovies() {

  return (<p>No se encontraron resultados</p>);

}

export function Movies({ movies }) {
  
  const hasMovies = movies?.length > 0;

  return hasMovies ? ( <ListOnMovies movies={movies}></ListOnMovies>) : ( <NoExtingMovies></NoExtingMovies>);

}
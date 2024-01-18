import "./App.css"
import { InputSearchMovies } from "./components/InputSearchMovies"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

export function App() {

  // ref, permite crear referencia mutable que persiste en el ciclo de vida del componente,
  // cada vez que cambia, no da renderizacion
  // const inputRef = useRef()
  // const inputCurrent = inputRef.current
  // const value = inputCurrent.value
  
  const { search, setSearch, error  } = useSearch()

  const { movies , getMovies} = useMovies( { search } )

  const handleSubmit = (ev) => {
  
    ev.preventDefault()

    //const {query} = Object.fromEntries(new window.FormData(ev.target))

    getMovies()

  }

  const handleChange = (ev) => {
  
    ev.preventDefault()

    setSearch(ev.target.value)
  
  }


  return (

    <div className="page">

      <header>

        <InputSearchMovies 
        
          handleChange={handleChange}
          handleSubmit={handleSubmit} 
          search={search} 
          error={error}
        
        ></InputSearchMovies>

      </header>

      <main>

        <Movies movies={movies}></Movies>

      </main>

    </div>
    
  )

}
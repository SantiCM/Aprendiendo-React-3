import { useState, useCallback} from "react"
import "./App.css"
import { InputSearchMovies } from "./components/InputSearchMovies"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"
import debounce from "just-debounce-it"

export function App() {

  // recojemos el estado del sort en falso
  const [sort, setSort] = useState(false)

  // propiedades que necesitamos del hook
  const { search, error, setUpdateSearch} = useSearch()

  // propiedades que necesitamos del hook y le damos el search y el sort 
  // que las ocuapmos en el archivo del hook
  const { movies, getMovies, loanding } = useMovies( { search, sort } )

  const debounceGetMovies = useCallback(
    
    debounce(search => {
  
      getMovies({search})
      
    }, 300),
    
  [getMovies])

  // al hacer submit, damos la peticion de las movies y le damos el search
  const handleSubmit = (ev) => {
  
    ev.preventDefault()

    //const {query} = Object.fromEntries(new window.FormData(ev.target))
    getMovies({search})

  }

  // el change del input, viene del ev
  const handleChange = (ev) => {
    
    // prevenimos
    ev.preventDefault()

    // la nueva busqueda sera el valor del target
    const newSearch = ev.target.value
    
    // al actualizar damos ese nuevo valor de busqueda
    setUpdateSearch(newSearch)

    debounceGetMovies(newSearch)

  }

  // cambiar el sort
  const handleSort = () => {
    
    // damos el segundo estado y damos que no existe el sort
    // para que se active y se desactive
    setSort(!sort)
  
  }


  return (

    <div className="page">

      <header>

        {/*Damos las propiedades que ocupa el componente del input */}
        <InputSearchMovies 
        
          handleChange={handleChange} handleSubmit={handleSubmit} 
          
          search={search}  error={error}
        
        ></InputSearchMovies>

        {/* Damos el input y le damos sus valores */}
        <input type="checkbox" checked={sort} onChange={handleSort}></input>

      </header>

      <main>

        { loanding ? <p>Cargandoooo.....</p> : <Movies movies={movies}></Movies> }

      </main>

    </div>
    
  )

}
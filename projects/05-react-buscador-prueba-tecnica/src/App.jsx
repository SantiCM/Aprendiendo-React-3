//import { useRef } from "react"
import { useEffect, useState } from "react"
import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovie"

export function App() {
  
  const { movies } = useMovies()

  const [ query, setQuery ] = useState("")

  const [ error, setError ] = useState(null)

  // ref, permite crear referencia mutable que persiste en el ciclo de vida del componente,
  // cada vez que cambia, no da renderizacion
  // const inputRef = useRef()
  // const inputCurrent = inputRef.current
  // const value = inputCurrent.value

  const handleSubmit = (ev) => {
  
    ev.preventDefault()

    //const {query} = Object.fromEntries(new window.FormData(ev.target))

  }

  useEffect(() => {

    if(query === "") {
    
      setError("No se puede buscar una peli vacia")

      return
    
    }

    if(query.match(/^d+$/)) {
    
      setError("No se puede buscar una peli con numeros")
      
      return
    
    }

    if(query.length < 3) {
    
      setError("No existen pelis de solo 2 palabras o menos")
      
      return
    
    }

    setError(null)
    
  }, [query])
  

  return (

    <div className="page">

      <header>

        <form onSubmit={handleSubmit}>

          <h1>Buscador De Pelis</h1>

          <label>Busca Tu Pelicula</label>

          <input name="query" value={query} onChange={ev => setQuery(ev.target.value)} placeholder="Marvel, DC, Action, Screen"></input>

          <button type="submitt">Buscar</button>

          {error && <p style={{color: "red"}}>{error}</p>}

        </form>

      </header>

      <main>

        <Movies movies={movies}></Movies>

      </main>

    </div>
    
  )

}
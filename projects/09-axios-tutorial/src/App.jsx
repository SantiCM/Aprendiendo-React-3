import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY, LANGUAGE } from "../config"

export function App() {

  const [list, setList] = useState([])

  const mostrandoPelis = async() => {

    try {

      const response = await axios.get("https://api.themoviedb.org/3/movie/popular", 
      
      { params: { api_key: API_KEY, language: LANGUAGE} })

      setList(response.data.results)
      
    } catch (error) {

      console.log(error)
      
    }

  }

  useEffect(() => { mostrandoPelis() }, [])
  
  return (

    <div className="contenedor">

        <ul className="movies">

          {list.map((text) => (

            <li key={text.id}>

              <h1 className="text-sm text-red-500">{text.original_title}</h1>

              <span>{text.overview}</span>

              <span>{text.popularity}</span>

              <img src={text.backdrop_path}></img>

            </li>
  
          ))}

        </ul>

        </div>

  )

}
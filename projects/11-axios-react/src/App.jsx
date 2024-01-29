import {useEffect, useState} from "react"
import axios from "axios"
import { MapeoPerosnajes } from "./components/MapeoPerosnajes"

export function App () {

  const [listActores, setListActores] = useState([])

  useEffect(() => {
    
    const obtenerPersonajes = async () => {
      
      const url = "https://thronesapi.com/api/v2/Characters"

      const response = await axios.get(url)

      setListActores(response.data)
    
    } 

    obtenerPersonajes()

  }, [])
  

  return (
    
    <div>

      <h1>Actores De Game Of Thrones</h1>

      <ul>

        { listActores.length === 0 && <p>Cargandoo...</p> }

        {listActores.map((text, index) => { return index < 10 ? <MapeoPerosnajes data={text}></MapeoPerosnajes> : null })}

      </ul>

    </div>
    
  )

}
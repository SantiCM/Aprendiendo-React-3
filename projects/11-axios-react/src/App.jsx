import {useEffect, useState} from "react"
import axios from "axios"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css';
import { MapeoPerosnajes } from "./components/MapeoPerosnajes"

export function App () {

  const [listActores, setListActores] = useState([])

  const [formData, setFormData] = useState({

    country: ""
    
  })

  const [numeroDeTelefono, setNumeroDeTelefono] = useState("")

  const handleChange = (name, value) => {

    setFormData({...formData, [name]: value})

  }

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

      <form className="flex flex-col justify-center">

        <PhoneInput country={"mx"} value={formData.country} onChange={(event) => handleChange("country", event.target.value)}></PhoneInput>

      </form>

      <ul>

        { listActores.length === 0 && <p>Cargandoo...</p> }

        {listActores.map((text, index) => { return index < 10 ? <MapeoPerosnajes data={text}></MapeoPerosnajes> : null })}

      </ul>

    </div>
    
  )

}
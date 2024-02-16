import { useEffect, useRef, useState } from "react"
import { ReqResponseListado, Usuario } from "../interfaces/reqRes"
import { reqRes } from "../api/reqRes"

export const useUsuarios = () => {

    // damos un estado de los usuarios donde todo va con la interfaz de usuarios como arreglo vacio y damos del estado un []
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    // damos un ref de la pagina que es 1, se inicializa
    const paginaRef = useRef(1)

    // damos un effect de cargar usuarios
    useEffect(() => {
      
        cargarUsuarios()
      
    }, [])

    // asincrona
    const cargarUsuarios = async () => {
        
        // api
        // recojemos el await de la peticion del get que viene del listado y le damos el complemento /users
        const resp = await reqRes.get<ReqResponseListado>("/users", { 

            // damos los params
            params: {
                
                // la pagina que viene del ref current
                page: paginaRef.current
            
            }
        
        })

        // si la data es mayor a 0
        if(resp.data.data.length > 0) {

            // damos la data
            setUsuarios(resp.data.data)
            
            // si no
        } else {

            // damos que el current dfel ref se reste
            paginaRef.current --

            alert("No hay mas registros")
        
        }
        
    }

    // siguiente
    const paginaSiguiente = () => {

        // del ref del current mas 
        paginaRef.current ++

        // damos el cargar usuarios
        cargarUsuarios()

    }

    // antess
    const paginaAnterior = () => {

        // si la ref del current es mayor a 0
        if(paginaRef.current > 1) {

            // damos el ref menos 
            paginaRef.current --

            // damos el ref menos  
            cargarUsuarios()
        
        }
    
    }

    // retornamos el usuarios primer estado, las variable de siguiente y anterior 
    return {
        
        usuarios, paginaAnterior, paginaSiguiente
    
    }
    
}
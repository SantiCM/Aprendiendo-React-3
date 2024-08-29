import { useContext } from "react"
import { AuthContex } from "../auth/context/AuthContex"
import { Navigate } from "react-router-dom"

export const PublicRoutes = ({children}) => {

    const {logged} = useContext(AuthContex) 
  
    return (!logged) ? children :  <Navigate to="/marvel"></Navigate> 

}

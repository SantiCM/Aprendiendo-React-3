import { Navigate, useLocation } from 'react-router-dom'
import { AuthContex } from '../auth/context/AuthContex'
import { useContext } from 'react'

export const PrivateRouter = ({children}) => {

  const { logged } = useContext(AuthContex)

  const {pathname, search} = useLocation()

  const lastPath = pathname + search

  localStorage.setItem("lastPath", lastPath)

  return (logged) ? children : <Navigate to="/login"></Navigate>
}

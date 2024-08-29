import { useNavigate } from "react-router-dom"
import { AuthContex } from "../context/AuthContex"
import { useContext } from "react"

export const LoginPages = () => {
  
  const {login} = useContext(AuthContex)

  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem("lastPath") || "/"

    login("Santiago")
    
    navigate(lastPath, {
    
      replace: true
    
    })
  
  } 
  
  return (
  
    <div className="container mt-5">

      <h1>Login</h1>


      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>

    </div>
    
  )

}
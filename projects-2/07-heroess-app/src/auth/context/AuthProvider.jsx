import { useReducer } from "react"
import { AuthContex } from "./AuthContex"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

/*const initialState = {

    logged: false,

}*/

const init = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    return {
    
        logged: !!user,
        user: user
    
    }

}


export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)
    
    const onLogin = (name = "") => {

        const user = {id: "ABC", name}
        
        const action = {
        
            type: types.login,
            payload: user

        }

        localStorage.setItem("user",JSON.stringify(user))

        dispatch(action)
    
    }

    const Logout = () => {
    
        localStorage.removeItem("user")

        const action = {type: types.logout}

        dispatch(action) 

    }

    return (
    
        <AuthContex.Provider value={{ ...state, login: onLogin, logout: Logout}}>

            {children}

        </AuthContex.Provider>

    )
}

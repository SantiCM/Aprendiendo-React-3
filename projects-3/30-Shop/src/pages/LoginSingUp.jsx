import {useDispatch, useSelector} from "react-redux"
import { useForm } from "../hooks/useForm"
import { useMemo } from "react"
import { startLoginWithEmailPassword } from "../store/auth/thunks"

const data = {

    email: "",

    password: ""

}

export const LoginSingUp = () => {

    //const {status, errorMessage} = useSelector(state => state.auth)

    //const dispatch = useDispatch()

    const {email, password, onInputChanhge} = useForm(data)

    const isAuthenticated = useMemo(() => status === "cheking", [status])

    const onSubmit = (event) => {
        
        event.preventDefault()

        dispatch(startLoginWithEmailPassword({email, password}))
    
    }
  
    return (
    
        <form onSubmit={onSubmit}>
            
            

        </form>
        
    )

}

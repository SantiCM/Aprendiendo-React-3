import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi"
import { clearErrorMessage, onCheking, onLogin, onLogout } from "../store/auth/authSlice"
import { onLogoutCalendar } from "../store/calendar/calendarSlice"

// la autenticacion
export const useAuthStore = () => {

    // mandamos llamar el status, el error, y el user del auth
    const { status, user, errorMessage } = useSelector(state => state.auth)

    //mandamos el dispatch
    const dispatch = useDispatch()

    // comienzo del login asincrono porque va a al backend que recibe el email y el password
    const startLogin = async( { email, password } ) => {
        
        // dispacth de checking 
        dispatch(onCheking())

        // si 
        try {

            // madamos la data del await del backend que es post del url /auth que recibe el email y password
            const {data} = await calendarApi.post("/auth", {email, password})

            // localStorage del token que viene de la data
            // osea guardar el token 
            localStorage.setItem("token", data.token) 

            // localStorage del token que recibe una nueva fecha
            localStorage.setItem("token-init-date", new Date().getTime())

            // el dispatch del login que recibe el nombre y el uid de la data del backend
            dispatch(onLogin({name: data.name, uid: data.uid}))

            // si falla
        } catch (error) {

            // mandamos el error del logout 
            dispatch(onLogout("Crendenciales Incorrectas"))

            // y 10 milesimas despues dara el error
            setTimeout(() => {

                dispatch(clearErrorMessage())

            }, 10);
            
        }
    
    
    }

    // hacemos el registro que recibe el name, password y email asincrono
    const startRegister = async({name, email, password, }) => {
        
        // si
        try {
            // madamos la data del await del backend que es post del url /auth/new que recibe el name,email y password
            const { data } = await calendarApi.post("/auth/new", { name, email, password,   })
            
            // localStorage del token que viene de la data
            // osea guardar el token 
            localStorage.setItem("token", data.token) 

            // localStorage del token que recibe una nueva fecha
            localStorage.setItem("token-init-date", new Date().getTime())

            // el dispatch del login que recibe el nombre y el uid de la data del backend
            dispatch(onLogin({name: data.name, uid: data.uid}))

            // si falla
        } catch (error) {

            // mandamos el salir y el error sera del backend (personalizado)
            dispatch(onLogout(error.response.data?.msg || ".."))

            // y 10 milesimas despues dara el error

            setTimeout(() => {


                dispatch(clearErrorMessage())

            }, 10);

            
        }
        
    }

    // chekar el token
    const checkAuthToken = async() => {
        
        // mandamos el token que viene del localStorage del token
        const token = localStorage.getItem("token")
        
        // validacion si el token no existe lo sacamos de la pagina
        if(!token) return dispatch(onLogout())

        // si 
        try {
            
            // madamos la data del await del backend que es post del url /auth/renew 
            const {data} = await calendarApi.get("auth/renew")

            // localStorage del token que viene de la data
            // osea guardar el token 
            localStorage.setItem("token", data.token) 

            // localStorage del token que recibe una nueva fecha
            localStorage.setItem("token-init-date", new Date().getTime())

            // el dispatch del login que recibe el nombre y el uid de la data del backend
            dispatch(onLogin({name: data.name, uid: data.uid}))

            // si falla   
        } catch (error) {

            // limpiamos el localStorage
            localStorage.clear()

            // despachamos el logout 
            dispatch(onLogout())
            
        }
    
    }

    // salir de la pagina
    const startLogout = () => {
        
        // limpiamos el localStorage
        localStorage.clear()

        // salimos del calendario 
        dispatch(onLogoutCalendar())

        // fuera de la pagina
        dispatch(onLogout())
    
    }


    return {
    
        /*Propiedades*/

        status, user, errorMessage,
        
        /*Metodos*/ 

        checkAuthToken,

        startLogin,

        startRegister,

        startLogout
    
    }

}
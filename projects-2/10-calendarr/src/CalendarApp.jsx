import { Provider } from "react-redux"
import { AppRouter } from "../src/router/AppRouter"
import {BrowserRouter} from "react-router-dom"
import { store } from "./store/store"

/*Obligatorio por el router*/

export const CalendarApp = () => {
  
    return (
        
        <Provider store={store}>
        
            <BrowserRouter>

                <AppRouter></AppRouter>
        
        
            </BrowserRouter>
        
        </Provider>
    
    )

}
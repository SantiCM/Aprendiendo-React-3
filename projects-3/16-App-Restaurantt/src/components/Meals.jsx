import { MealItem } from "./MealItem"
import  {useHttp} from "../hooks/useHttp"
import { Error } from "./Error"

const requestConfig = {}

export const Meals =  () => {

    // get/meals

    // extreamos las propiedades que necesitamos
    // damos el hook de http donde damos la url y el objeto de arriba
    const {data:loadesMeals, isLoanding, error} = useHttp("http://localhost:3000/meals", requestConfig, [])

    // si esta cargando damos el texto de que la peticion esta en proceso
    if(isLoanding) {
    
        return <p className="center">Fetching meals....</p>
    
    }

    // si hayv error damos el componente de error
    if(error) {
        
        return <Error 
            
            title="Failed to fetch meals"

            message={error}
            
        >

        </Error>
    
    }

    return (
  
        <ul id="meals">

            {
                // damos el map de la data 
                loadesMeals.map((meal) => ( 
                
                    <MealItem 
                    
                        key={meal.id}

                        meal={meal}

                    >

                    </MealItem>

                ))
            
            }

        </ul>
  
    )

}
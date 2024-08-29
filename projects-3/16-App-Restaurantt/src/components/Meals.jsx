import { MealItem } from "./MealItem"
import  {useHttp} from "../hooks/useHttp"
import { Error } from "./Error"

const requestConfig = {}

export const Meals =  () => {

    const { data:loadesMeals, isLoanding, error } = useHttp("http://localhost:3000/meals", requestConfig, [])

    if (isLoanding) return <p className="center">Fetching meals....</p>

    if(error) {
        return <Error title="Failed to fetch meals" message={error} />
    }

    return (
        <ul id="meals">
            {loadesMeals.map((meal) => {
                return (
                    <MealItem key={meal.id} meal={meal} />
                )
                })
            }
        </ul>
    )
}
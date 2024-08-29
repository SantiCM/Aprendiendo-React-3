import { useContext } from "react"
import { formatting } from "../util/formatting"
import { Button } from "./UI/Button"
import CartContex from "../store/CardContext"
import Item from "../../backend/data/images/lemon-cheesecake.jpg"

export const MealItem = ( { meal } ) => {

    const cartCtx = useContext(CartContex)

    const handleAddMealCart = () => {
        cartCtx.addItem(meal)
    }

    const mealImage = (`../backend/data/${meal.image}`);

    return (
        <li className="meal-item">
            <article>
                <img src={mealImage} alt={meal.name}></img>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{formatting.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-items-actions">
                    <Button  onClick={handleAddMealCart} >
                        Add to card
                    </Button>
                </p>
            </article>
        </li>
    )
}

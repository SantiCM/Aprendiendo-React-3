import { useContext } from "react"
import { formatting } from "../util/formatting"
import { Button } from "./UI/Button"
import CartContex from "../store/CardContext"

// Componente para dar los productos 
// le damos el meal
export const MealItem = ( { meal } ) => {

    // mandamos el contexto
    const cartCtx = useContext(CartContex)

    // damos añadir el producto a la caja
    const handleAddMealCart = () => {

        // damos el context, la propiedad de agregar el producto y el item
        cartCtx.addItem(meal)
    
    }
  
    return (
        
        <li 
        
            className="meal-item"
            
        >

            <article>

                { /* Damos la imagen y en este caso para que funcionen damos la peticion y damos el meal que viene de la imagen */}

                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>

                <div>

                    { /* Damos el nombre */}

                    <h3>{meal.name}</h3>
                    
                    { /* Damos el archivo js de formatear el precio que viene del meal.price */}

                    <p className="meal-item-price">{formatting.format(meal.price)}</p>

                    { /* Damos la descripcion del producto */}

                    <p className="meal-item-description">{meal.description}</p>

                </div>

                <p className="meal-items-actions">
                    
                    { /* Damos el boton personalizado y le decimos que al darle click se manda al cart */}

                    <Button 

                        onClick={handleAddMealCart}

                    >
                        Add to card
                        
                    </Button>

                </p>

            </article>

        </li>

    )

}

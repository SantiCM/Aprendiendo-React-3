export function CartItem({ thumbnail, title, price, quantity, addToCart }) {

    return (
        
        <li>

            <img src={thumbnail}></img>

            <div>

                <h3>{title}</h3>

                <strong>${price}</strong>

            </div>

            <footer>

                <small>Cantidad: {quantity}</small>

                <button onClick={addToCart}>+</button> 

            </footer>

        </li>
        
    )

}
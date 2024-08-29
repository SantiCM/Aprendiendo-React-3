import { formatting } from "../util/formatting"

export const CartItem = ( { name, quantity, price, onIncrease, onDecrease } ) => {

    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x {formatting.format(price)}
            </p>
            <p className="cart-item-actions">
                <button  onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}
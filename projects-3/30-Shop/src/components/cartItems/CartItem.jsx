import { useContext } from "react"
import {ShopContext} from "../../context/ShopContext"
import remove_icon from "../Assets/cart_cross_icon.png"
import "./CartItem.css"

export const CartItem = () => {

    const {all_product, cartItems, remove, getTotal} = useContext(ShopContext)
    
    return (
        
        <div className="cartitems">
            
            <div className="cartitems-format-main">

                <p>Products</p>

                <p>Title</p>
                
                <p>Price</p>

                <p>Quantity</p>

                <p>Total</p>

                <p>Remove</p>
            
            </div>

            <hr />

            {all_product.map((e, index) => {
            
                if(cartItems[e.id] > 0) {
                
                    return(

                        <div key={index}>
                    
                            <div>

                                <div className="cartitems-formart cartitems-format-main">

                                    <img src={e.image} alt="" className="carticon-product-icon"/>

                                    <p>{e.name}</p>

                                    <p>${e.new_price}</p>

                                    <button className="cartitems-quantity">{cartItems[e.id]}</button>

                                    <p>${e.new_price * cartItems[e.id]}</p>

                                    <img src={remove_icon} alt="" onClick={() => remove(e.id)} className="carticon-product-icon-remove"/>

                                </div>

                            </div>
                            <hr />

                        </div>

                    )
        
                } return null

            })}

            <div className="cartitems-down">

                <div className="cartitems-total">

                    <h1>Cart Totals</h1>

                <div>

                <div className="caritems-total-item">

                    <p>SubTotal</p>

                    <p>${getTotal()}</p>

                </div>

                <hr />

                <div className="caritems-total-item">

                <p>Shipping Free</p>

                <p>Free</p>

            </div>

            <hr />

            <div className="caritems-total-item">

                <h3>Total</h3>

                <h3>${getTotal()}</h3>

            </div>

        </div>

        <button>CHECK OUT</button>

    </div>

</div>


           
        </div>  
        
        
    )

}
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"

export const ProductDisplay = (props) => {

    const {product} = props

    const {add} = useContext(ShopContext)

    return (
      
        <div className='productdisplay'>
        
            <div className="productdisplay-left">

                <div className="productdisplay-img-list">

                    <img src={product.image} alt="" />

                    <img src={product.image} alt="" />

                    <img src={product.image} alt="" />

                    <img src={product.image} alt="" />

                </div>

                <div className="productdisplay-img">

                    <img src={product.image} alt="" className="productdisplay-main-img"/>

                </div>

            </div>

            <div className="productdisplay-right">

                <h1>{product.name}</h1>

                <div className="productdisplay-right-start">

                    <img src={star_icon} alt="" />

                    <img src={star_icon} alt="" />
                
                    <img src={star_icon} alt="" />
                
                    <img src={star_icon} alt="" />
                
                    <img src={star_dull_icon} alt="" />

                    <p>({product.valoration})</p>

                </div>

                <div className="productDisplay-rigth-prices">

                    <div className="productdisplay-right-price-old">

                        ${product.old_price}

                    </div>

                    <div className="productdisplay-right-price-new">

                        <span style={{color: "red"}}> ${product.new_price}</span>

                    </div>

                </div>

                <div className="productdisplay-right-description">
                    
                    What does it mean green sweatshirt brand Puma Mercedes Benz a spectacular sweatshirt for the best experience in this winter time

                </div>

                <div className="productdisplay-right-size">

                    <h1>Selected Size</h1>

                    <div className="productdisplay-right-sizes">

                        <button className="btn-right-sizes">S</button>

                        <button className="btn-right-sizes">M</button>

                        <button className="btn-right-sizes">L</button>

                        <button className="btn-right-sizes">XL</button>

                        <button className="btn-right-sizes">XXL</button>

                    </div>

                </div>

                <button className="productdisplaybtn-card" onClick={() => {add(product.id)}}>Add to card</button>

                {(product.color === "rosa") && <p className="productdisplay-category"><span style={{color: "#ffa0bd"}}>Category: {product.category}</span></p>} 

                {(product.color === "azul") && <p className="productdisplay-category"><span style={{color: "#86aad3"}}>Category: {product.category}</span></p> }

                {(product.color === "green") && <p className="productdisplay-category"><span style={{color: "#259f48"}}>Category: {product.category}</span></p> }
                
            </div>

        </div>

    )

}
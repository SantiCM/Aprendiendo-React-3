import { useContext } from "react"
import "./css/ShopCategory.css"
import { ShopContext } from "../context/ShopContext"
import { Item } from "../components/Item/Item"
import { Link } from "react-router-dom"

export const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
    
  return (

    <div className="shop-category">

      <img src={props.banner} alt="" className="shopcategory-banner" />

      <div className="shopcategory-indexSort">

        <p>

          <span>Showing</span> out of 36 products

        </p>

      </div>  

      <div className="shopcategory-products">

        {all_product.map((product, index) => {

          if(props.category === product.category) {

            return ( <Item 
              
              key={index} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price}

                />)
            
            } else {
              
              return null
            
            }
          }
        
        )}

      </div>

      <div className="shopcategory-loadmore">

        <Link to="/">Explore More</Link>

      </div>

    </div>

  )

}

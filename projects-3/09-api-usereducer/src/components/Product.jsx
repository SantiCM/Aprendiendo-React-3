import { useContext } from "react";
import { CartContext } from "../store/Shopping-cart-context";

// mostrando los productos
// recibimos las propiedades del archivo js
export default function Product({ id, image , title , price , description }) {

  // recojemos el addItemToCart que viene del useContext que recibe el context creado
  const { addItemToCart } = useContext(CartContext)

  return (

    <article className="product">
      
      { /* Mandamos la imagen y el titulo que viene del archivo js */ }
      
      <img src={image} alt={title} />
    
      <div className="product-content">
    
        <div>

        { /* Mandamos la el titulo, el precio y la descripcion del producto */ }

          <h3>{title}</h3>
    
          <p className='product-price'>${price}</p>
    
          <p>{description}</p>
    
        </div>
    
        <p className='product-actions'>

          { /* Al hacerle click al boton mandamos una funcion y con flecha mandamos la propiedad del context que recibe el id */ }

          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
    
        </p>
    
      </div>
    
    </article>
  
  );

}
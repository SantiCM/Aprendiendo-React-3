import { useContext } from "react";
import { CartContext } from "../store/Shopping-cart-context";

// Componente donde mostramos los productos del carrito
export default function Cart() {

  // mandamos una variable donde desustruramos los items y el actualizar que viene del context que recibe
  // el context creado

  const {items, updatedItemQuantity} = useContext(CartContext)

  // variable total del precio

  // decimos que los items que vienen del context
  // le aplicamos el metodo reduce
  //  Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor

  const totalPrice = items.reduce(

    // le mandamoos dos argumentos y con flecha
    // le decimos que el acc mas el item del precio 
    // por el item del quantity
    (acc, item) => acc + item.price * item.quantity,

    // se queda en 0
    0

  );

  // formateando el precio
  // el precio total que sera visto en 2 digitos
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  
  return (

    // El consumer puede utilizarse para envolver el codigo que deba tener acceso a un valor de contexto

    //<CartContext.Consumer></CartContext.Consumer>

          
    <div id="cart">
      
      { /* Si los items son iguales a 0, mostramos este mensaje de no hay nada en el carro */ }

      {items.length === 0 && <p>No items in cart!</p>}

      { /* Si los items son mayor a 0 */ }

      {items.length > 0 && (
    
        <ul id="cart-items">
          
          { /* Mandamos los arituclos mapeados, con su funcion */ }
          
          {items.map((item) => {

            // hacemos una variable donde formateamos de nuevo el precio
            // pero aca decimos que de la funcion, mostramos el precio, en 2 digitos
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              
              // le damos su key
              <li key={item.id}>
              
                <div>

                  { /* Le damos el nombre y el precio formateado */ }

                  <span>{item.name}</span>
              
                  <span> ({formattedPrice})</span>
              
                </div>
              
                <div className="cart-item-actions">

                  { /* Cuando le hacemos click al boton mandamos el actualizar del context creado, y al id del item, le restamos 1*/ }

                  <button onClick={() => updatedItemQuantity(item.id, -1)}>
              
                    -
             
                  </button>

                  { /* Mandamos el quantity*/ }
                  <span>{item.quantity}</span>

                  { /* Al hacer click al boton mandamos el actualizar del context creado, y al id del item, le sumamos 1*/ }

                  <button onClick={() => updatedItemQuantity(item.id, 1)}>
             
                    +
             
                  </button>
             
                </div>
             
              </li>
            
            );
          
          })}
        
        </ul>
      
      )}
      
      <p id="cart-total-price">
          
        { /* Mostramos el total del carrito con el precio tambien formateado */}

        Cart Total: <strong>{formattedTotalPrice}</strong>
      
      </p>
    
    </div>
          
  )
      
}
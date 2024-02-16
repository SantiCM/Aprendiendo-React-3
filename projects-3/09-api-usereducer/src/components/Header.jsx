import { useContext, useRef } from 'react';

import CartModal from './CartModal.jsx';

import { CartContext } from '../store/Shopping-cart-context.jsx';

// el header de la app
export default function Header() {
  
  // recojemos los items que viene del useContext que recibe el context que creamos
  const {items} = useContext(CartContext)
  
  // mandamos el modal con su ref
  const modal = useRef();

  // mandamos el items de cuantos hay para saber la cantidad del carrito
  const cartQuantity = items.length;

  // abrir el carrito
  function handleOpenCartClick() {
    
    // abrimos el modal
    modal.current.open();
  
  }

  // las acciones, mandamos un boton de cerrar
  let modalActions = <button>Close</button>;

  // si la cantidad de carritos es mayor a 0
  if (cartQuantity > 0) {
    
    //mandamos este contenido jsx
    modalActions = (
  
      <>

        { /*Mandamos el boton de close y el de checar las compras */ }

        <button>Close</button>
      
        <button>Checkout</button>
      
      </>
    
    );
  
  }

  return (
  
    <>

      { /* Mandamos el modal con su referencia, el title y las acciones que son las del carrito */ }
      
      <CartModal
    
        ref={modal}
    
        title="Your Cart"
        
        actions={modalActions}
      
      />
      
      <header id="main-header">
      
        <div id="main-title">
      
          <img src="logo.png" alt="Elegant model" />
      
          <h1>Elegant Context</h1>
      
        </div>
      
        <p>

          { /* Al hacer click al boton mandamos el abrir el modal y mostramos la cantidad de productos */ }

          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
      
        </p>
      
      </header>
    
    </>
  
  );

}
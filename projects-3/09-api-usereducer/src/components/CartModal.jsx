import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

// modal del carrito 
// le mandamos el forwardRef para hacer la referencia a otro componente
//  las propiedades, al igual que el ref
const CartModal = forwardRef(function Modal({ title, actions },ref) {

  // mandamos el ref del dialog
  const dialog = useRef();
  
  // tomamos el useImperativeHandle y le damos la ref y le damos una funcion
  useImperativeHandle(ref, () => {
    
    // retornamos
    return {
      
      // abrirlo
      open: () => {
        
        // mandamos el modal
        dialog.current.showModal();
  
      },
  
    };
  
  });

  // retornamos contenido jsx con el createPortal (evitar problemas con el modal)
  return createPortal(
    
    // le damos la referencia del modal
    <dialog id="modal" ref={dialog}>
      
      <h2>{title}</h2>
    
      <Cart/>

      { /* Mandamos el form con el metodo dialog*/ }
      <form method="dialog" id="modal-actions">

        {actions /*Y mandamos las acciones, que son los productos seleccionados*/}
    
      </form>
    
    </dialog>,
    
    // OBLIGATORIO A LA HORA DE USAR EL CREATEPORTAL
    document.getElementById('modal')
  
  );

});

export default CartModal;

import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

// Modal
export default function Modal({ title, children, onClose }) {

  //const hiddenAnimationStateDialog = {opacity: 0, y: -30}

  // creamos un nuevp portal 
  return createPortal(
  
    <>

      { /* Al hacerle click, ceramos el modal*/ }
      
      <div className="backdrop" onClick={onClose} />

      { /* Damos el motion del dialog */}

      <motion.dialog 

        // damos las variantes, forma de dar varios estilos
        variants={{
          
          //hiddenAnimationStateDialog: {opacity: 0, y: -30},
          //visibleAnimationStateDialog: {opacity: 1, y: 0}

          hidden: {opacity: 0, y: -30},

          visible: {opacity: 1, y: 0}
        
        }}

        // initial, es dar un estado por defecto
        initial="hidden" 

        // animate (animacion)
        animate="visible"

        //exit, salir 
        exit="hidden" open className="modal">
    
        <h2>{title}</h2>
    
        {children}
    
      </motion.dialog>
    
    </>,
    
    document.getElementById('modal')
  
  );

}

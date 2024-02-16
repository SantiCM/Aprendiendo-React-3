import { useState } from 'react';

import NewChallenge from './NewChallenge.jsx';
import { AnimatePresence, motion } from 'framer-motion';

// Header 
export default function Header() {

  // damos el estado de crear un nuevo reto
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  // nuevo 
  function handleStartAddNewChallenge() {
    
    // damos el 2 estdo en true
    setIsCreatingNewChallenge(true);
  
  }

  // ya se da el reto
  function handleDone() {
    
    // el 2 estado, lo cerramos 
    setIsCreatingNewChallenge(false);
  
  }

  return (
  
    <>
      
      {/* Este hook de la dependecia, se utiliza cuando se quiere animar un componente o funcion que muestra o elimina
        condicionalmente elementos
      */}

      <AnimatePresence>

        { /* Si el primer estado pasa damos el componente de nuevo challenge dando el que se cierra */ }

        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}

      </AnimatePresence>
    
      <header id="main-header">
    
        <h1>Your Challenges</h1>

        { /* Damos el motion del buton */}

        <motion.button 

          // forma de utilizar el hover
          whileHover={ {scale: 1.1, } /*backgroundColor: "#8b11f0"*/ }  

          // la transicion, damos el tipo
          transition={{ type: "spring", stiffness: 500 }}

          // al hacerle click damos que de un nuevo challenge
          onClick={handleStartAddNewChallenge} 
          
          className="button"
          
        >
    
          Add Challenge
    
        </motion.button>
    
      </header>
    
    </>
 
  );

}


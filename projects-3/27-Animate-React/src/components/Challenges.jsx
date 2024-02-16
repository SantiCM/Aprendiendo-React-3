import { useContext, useState } from 'react';

import { ChallengesContext } from '../store/challenges-context.jsx';
import ChallengeItem from './ChallengeItem.jsx';
import ChallengeTabs from './ChallengeTabs.jsx';
import { AnimatePresence, motion } from 'framer-motion';

export default function Challenges() {

  // recojemos los elotes del context
  const { challenges } = useContext(ChallengesContext);

  // damos el estado activo y le damos el active
  const [selectedType, setSelectedType] = useState('active');

  // otro estado en nulo
  const [expanded, setExpanded] = useState(null);

  // seleccionar un tipo y le damos el argumento
  function handleSelectType(newType) {
    
    // el segundo estado le damos ese argumento
    setSelectedType(newType);
  
  }

  // ver los detalles, le damos el id
  function handleViewDetails(id) {
    
    // el segundo estado, le damos la funcion
    setExpanded((prevId) => {
      
      // si esa funcion es igual al id
      if (prevId === id) {
        
        // retornamos null
        return null;
  
      }

      // retornamos el id
      return id;
  
    });
  
  }

  // filtrar los retos
  const filteredChallenges = {
    
    // si es activo, damos que los retos le damos el filter, entrando al array
    // le damos una funcion y esa funcion del status que sea igual a active
    active: challenges.filter((challenge) => challenge.status === 'active'),
    
    // completado, damos que los retos le damos el filter, entrando al array
    completed: challenges.filter(
      
      // le damos una funcion y esa funcion del status que sea igual a completado
      (challenge) => challenge.status === 'completed'
  
    ),
      
    // si falla, damos que los retos le damos el filter, entrando al array,
    // le damos una funcion y esa funcion del status que sea igual a fallido
    failed: challenges.filter((challenge) => challenge.status === 'failed'),
  
  };

  // display, damos los retos filtrados y le damos un array ddel primer estado del tipo
  const displayedChallenges = filteredChallenges[selectedType];

  return (
   
   <div id="challenges">

      { /* Damos el componente de los retos */}
      <ChallengeTabs

        // los retos seran el primer estado del filtro
        challenges={filteredChallenges}

        // esta seleccionado, es el seleccionar el tipo
        onSelectType={handleSelectType}

        // seleccionar el type es lo mismo
        selectedType={selectedType}
      
      >

        {/*valor por defecto es sync:reproduce todas las animaciones simultaneamente, wait: esperar*/}
        <AnimatePresence mode='wait'>

          {displayedChallenges.length > 0 && (

            // la key, es uan forma de decir a la dependencia que nos ayude a que esto forma parte de todo
            <motion.ol initial={{opacity: 0, y: -20}} animate={{opacity:1, y: 0}} key="list" exit={{ y: -30, opacity: 0 }} className="challenge-items">

              <AnimatePresence>
              
                {displayedChallenges.map((challenge) => (
          
                  <ChallengeItem
          
                    key={challenge.id}
            
                    challenge={challenge}
            
                    onViewDetails={() => handleViewDetails(challenge.id)}
            
                    isExpanded={expanded === challenge.id}
         
                  />
        
                ))}

              </AnimatePresence>

            </motion.ol>
      
          )}  

          { /* Si el display de los retos es igual a 0 damos */}
          {displayedChallenges.length === 0 && <motion.p initial={{opacity: 0, y: -20}} animate={{opacity:1, y: 0}} exit={{opacity:0, y:-20}} key="fallback">No challenges found.</motion.p>}
                
        </AnimatePresence>

      </ChallengeTabs>
    
    </div>
  
  );

}
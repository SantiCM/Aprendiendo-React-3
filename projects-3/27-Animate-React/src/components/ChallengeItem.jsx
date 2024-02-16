import { useContext } from 'react';
import { ChallengesContext } from '../store/challenges-context.jsx';
import { AnimatePresence, motion } from 'framer-motion';

export default function ChallengeItem({ challenge, onViewDetails, isExpanded}) {

  // recojemos el actualizar del context
  const { updateChallengeStatus } = useContext(ChallengesContext);

  // damos la hora formateada
  const formattedDate = new Date(challenge.deadline).toLocaleDateString('en-US', {
  
    day: '2-digit',
  
    month: 'short',
  
    year: 'numeric',
  
  });

  // cancelar
  function handleCancel() {
    
    // ese contexto, le damos el reto con su id y fallido 
    updateChallengeStatus(challenge.id, 'failed');
  
  }

  // completado
  function handleComplete() {
    
    // ese contexto, le damos el reto con su id y completado
    updateChallengeStatus(challenge.id, 'completed');
  
  }

  return ( 
    
    //       forma de animar rapida una lista, (moverse a una posicion por ejemplo) : layout
    <motion.li  exit={{ y: -30, opacity: 0 }}>
    
      <article className="challenge-item">
    
        <header>

          {/*Damos la imagen de la copia del reto de la imagen */}
          <img {...challenge.image} />
    
          <div className="challenge-item-meta">
    
            <h2>{challenge.title}</h2>
    
            <p>Complete until {formattedDate}</p>
    
            <p className="challenge-item-actions">
    
              <button onClick={handleCancel} className="btn-negative">
    
                Mark as failed
    
              </button>
    
              <button onClick={handleComplete}>Mark as completed</button>
    
            </p>
    
          </div>
    
        </header>

        {/*<div className={`challenge-item-details ${isExpanded  ? "expanded" : ""}`}>*/}

        <div className={"challenge-item-details"}>
    
          <p>
    
            <button onClick={onViewDetails}>
    
              View Details{' '}
    
              <motion.span animate={{rotate: isExpanded ? 180 : 0}} className="challenge-item-details-icon">&#9650;</motion.span>
    
            </button>
    
          </p>

          <AnimatePresence>

            {isExpanded && (
    
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1}} exit={{ height: 0, opacity: 0  }}>
    
                <p className="challenge-item-description">
    
                  {challenge.description}
    
                </p>
    
              </motion.div>
  
            )}

          </AnimatePresence>
        
        </div>
    
      </article>
    
    </motion.li>
  
  );
}


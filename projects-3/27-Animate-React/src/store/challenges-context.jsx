import { createContext, useState } from 'react';

// damos el crear contextooo 
export const ChallengesContext = createContext({

  // damos los retos como arreglo vacio
  challenges: [],

  // agregar reto, como funcion
  addChallenge: () => {},

  // actualizar el reto, como funcion
  updateChallengeStatus: () => {},

});

// provider del context
export default function ChallengesContextProvider({ children }) {

  // estado de los challenges como arreglo vacio
  const [challenges, setChallenges] = useState([]);

  // agregar, dando el reto
  function addChallenge(challenge) {

    // segundo estado como funcion, y damos arreglo
    setChallenges((prevChallenges) => [

      // la copia del argumento, el id sera random y sera string, y status sera activo
      { ...challenge, id: Math.random().toString(), status: 'active' },

      // ademas que damos la copia de esa funcion , BASICO
      ...prevChallenges,

    ]);

  }

  // eliminar el reto, le damos su id como argumento
  function deleteChallenge(challengeId) {

    // el segundo estado damos la funcion
    setChallenges((prevChallenges) =>

     //esa funcion le damos el metodo filter, osea entramos al arreglo, damos una funcion 
     // y si el reto que viene del id es diferente a el id del argumento, se elimina 
      prevChallenges.filter((challenge) => challenge.id !== challengeId)

    );
  
  }

  // actualizar, damos el id y el nuevo status
  function updateChallengeStatus(challengeId, newStatus) {
    
    // segungo estado, damos una funcion
    setChallenges((prevChallenges) =>

      // esa funcion la mapeamos, le damos un argumento
      prevChallenges.map((challenge) => {
        
        // si el reto (argumento) que viene del id es igual a el reto del id
        if (challenge.id === challengeId) {
          
          // retornamos la copia del reto, y su status es el nuevo status
          return { ...challenge, status: newStatus };
    
        }
        
        //retornamos el reto
        return challenge;
    
      })
    
    );
  
  }

  // damos todas las funciones y el primer estado
  const challengesContext = {challenges,addChallenge,deleteChallenge,updateChallengeStatus,};

  return (
    
    // damos el provider y le damos su valor que son todas esas funciones
    <ChallengesContext.Provider value={challengesContext}>
    
      {children /*Damos los hijos */}
    
    </ChallengesContext.Provider>
  
  );

}
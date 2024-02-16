import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  
  const [x, setX] = useState(0);
  
  const [y, setY] = useState(0);
  
  const [rotate, setRotate] = useState(0);

  return (
    
    <div id="demo">
      
      {/*Forma de dar el motion */}
      <motion.div 

        id="box" 

        // damos la animacion
        // en este caso cuando es x es el primer estado y asi sucesivamente
        animate={{ x: x, y: y, rotate: rotate }} 

        // la transicion 
        transition={{

          // damos la duracion
          duration: 0.3,
          //bounce: 0,
          // tipo de animate
          type: "tween"
        }}/>

      <div id="inputs">
    
        <p>
    
          <label htmlFor="x">X</label>
    
          <input
    
            type="number"
            
            id="x"
            
            onChange={(event) => setX(+event.target.value)}
          
          />
        
        </p>

        <p>
        
          <label htmlFor="y">Y</label>
        
          <input
        
            type="number"
            
            id="y"
            
            onChange={(event) => setY(+event.target.value)}
         
          />
       
        </p>

        <p>
       
          <label htmlFor="rotate">Rotate</label>
       
          <input
       
            type="number"
            
            id="rotate"
            
            onChange={(event) => setRotate(+event.target.value)}
         
          />
        
        </p>
      
      </div>
    
    </div>
  
  );

}

export default App;

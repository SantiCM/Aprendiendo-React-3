import { motion } from 'framer-motion';
import Badge from './Badge.jsx';

// el tab
function Tab({ isSelected, onSelect, badgeCaption, children }) {
  
  return (
  
    <li>
      
      {/* Damos el buton*/}
      <button

        // la clase sera si esta seleccionada, selected sino undefined
        className={isSelected ? 'selected' : undefined}

        // al hacerle click la seleccionamos
        onClick={onSelect}
      >

        {children /* Damos los hijos */}

        {/*Damos el componente de badge, le damos su key y la caption*/}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      
      </button>

      {/*Si esta seleccionada damos este div */}

      {/* El layout id es decir que todas van a tener ese comportamiento */}
      {isSelected && <motion.div layoutId='tab-indicator' className="active-tab-indicator" />}
  
    </li>
  
  );

}

export default function ChallengeTabs({ selectedType, onSelectType, challenges, children,}) {
  
  return (
    
    <>
      
      <menu id="tabs">
        
        <Tab
          
          isSelected={selectedType === 'active'}
          
          onSelect={() => onSelectType('active')}
          
          badgeCaption={challenges.active.length}
        
        >
          
          Active
        
        </Tab>
        
        <Tab
          
          isSelected={selectedType === 'completed'}
          
          onSelect={() => onSelectType('completed')}
          
          badgeCaption={challenges.completed.length}
        
        >
          
          Completed
        
        </Tab>
        
        <Tab
          
          isSelected={selectedType === 'failed'}
          
          onSelect={() => onSelectType('failed')}
          
          badgeCaption={challenges.failed.length}
        
        >
          
          Failed
        
        </Tab>
      
      </menu>
      
      <div>{children}</div>
    
    </>
  
  );

}

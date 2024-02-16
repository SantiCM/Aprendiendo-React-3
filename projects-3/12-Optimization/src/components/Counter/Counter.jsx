import { useState, memo, useCallback, useMemo } from 'react';
import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  
  log('Calculating if is prime number', 2, 'other');

  if (number <= 1) {
   
    return false;
  
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
  
    if (number % i === 0) {
  
      return false;
  
    }
 
  }

  return true;

}

// Se utiliza el memo para que se renderize el componente cada que es utilizado de esta forma
const Counter = memo(function Counter({ initialCount }) {

  log('<Counter /> rendered', 1);

  // En este caso, utilizamos el useMemo para hacer la memorizacion de esa funcion
  // NO SE UTILIZE EN EXCESO

  const initialCountIsPrime = useMemo(

    () => isPrime(initialCount),

    [initialCount]

  );

  /*useEffect(() => {
    
    setCounterChanges([{value: -1, id:Math.random() * 100}])


  }, [initialCount])*/
  

  // const [counter, setCounter] = useState(initialCount);
  
  const [counterChanges, setCounterChanges] = useState([{value: initialCount, id:Math.random() * 100}]);

  const currentCounter = counterChanges.reduce(
  
    (prevCounter, counterChange) => prevCounter + counterChange.value,
  
    0
  
  );

  // En este caso el UseCallback lo ocupamos para las dependencias del useEffect
  // Pero aqui tambien es util
  // Lo que hacemos aqui es que utilizamos el UseCallback para hacer que esa funcion se renderize solo cuando se utiliza

  const handleDecrement = useCallback(function handleDecrement() {
  
    // setCounter((prevCounter) => prevCounter - 1);
  
    setCounterChanges((prevCounterChanges) => [{value: -1, id:Math.random() * 1000}, ...prevCounterChanges]);
  
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
  
    // setCounter((prevCounter) => prevCounter + 1);
  
    setCounterChanges((prevCounterChanges) => [{value: 1, id:Math.random() * 1000}, ...prevCounterChanges]);
  
  }, []);

  return (
  
    <section className="counter">
    
      <p className="counter-info">
    
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
    
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
    
      </p>
    
      <p>
    
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
    
          Decrement
    
        </IconButton>
    
        <CounterOutput value={currentCounter} />
    
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
    
          Increment
    
        </IconButton>
    
      </p>

      <CounterHistory history={counterChanges}></CounterHistory>
    
    </section>
  
  );

});

export default Counter;
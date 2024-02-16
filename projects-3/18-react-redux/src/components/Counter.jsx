import { useSelector, useDispatch} from 'react-redux';
import classes from '../components/styles-components/Counter.module.css';
import { INCREMENENT } from '../store';

// Componente del counter
export const Counter = () => {

  // damos el dispatch
  const dispatch = useDispatch()

  // decimos que el counter viene del selector del state que ese state del counter
  const counter = useSelector(state => state.counter)

  // decimos que el showCounter viene del selector del state que ese state del showCounter
  const show = useSelector(state => state.showCounter)

  // incrementar
  const incrementHandler = () => {
    
    // damos el dispatch del tipo incrementar
    dispatch({type: INCREMENENT})
  
  }

  // incrementar en cierto numero
  const increaseHandler = () => {
    
    // damos el dispatch del tipo incrementar en cierto numero y es el 5
    dispatch({type: "increase", amount: 5})
  
  }

  // decrementar
  const decrementHandler = () => {
    
    // damos el dispatch del tipo decrementar
    dispatch({type: "decrement"})
  
  }

  // reset
  const toggleCounterHandler = () => {
    
    // damos el dispatch del tipo reset
    dispatch({type: "reset"})
  
  };

  return (
    
    <main className={classes.counter}>
    
      <h1>Redux Counter</h1>
    
      {show && <div className={classes.value}>{counter}</div>}
 
      <div>

        <button onClick={incrementHandler}>Increment</button>

        <button onClick={increaseHandler}>Increment By 5</button>

        <button onClick={decrementHandler}>Decrement</button>

      </div>
    
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    
    </main>
  
  );

};
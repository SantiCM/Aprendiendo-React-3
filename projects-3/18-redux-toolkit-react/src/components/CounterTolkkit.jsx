import { useSelector, useDispatch } from 'react-redux';
import classes from '../components/styles-components/Counter.module.css';
import counterActions  from '../store/counterSlice';

export const CounterTolkit = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter.counter)

  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
  
    dispatch(counterActions.increment())
  
  }

  const increaseHandler = () => {
  
    dispatch(counterActions.increase(10)) // { type: identifier, payload: 10 }
  
  }

  const decrementHandler = () => {
  
    dispatch(counterActions.decrement())
  
  }
  
  const toggleCounterHandler = () => {
  
    dispatch(counterActions.reset())
  
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

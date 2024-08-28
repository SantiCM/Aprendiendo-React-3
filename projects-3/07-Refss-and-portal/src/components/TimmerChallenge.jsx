import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export const TimmerChallenge = ({ title, targetTime }) => {

  // mandamos la referencia 
  const timer = useRef();

  const dialog = useRef();

  // mandamos un estado el cual recibe el tiempo multiplicado por mil
  const [timeRemain, setTimeRemain] = useState(targetTime * 1000);

  // si esta activo el tiempo
  // decimos que el primer estado si es mayor a 0 y ese mismo estado  que sea menor al tiempo multiplicado por 1000
  const timerIsActive = timeRemain > 0 && timeRemain < targetTime * 1000;

  // si el primer estado es menor o igual a 0
  if (timeRemain <= 0) {
    
    // lo limpiamos
    clearInterval(timer.current);

    // mandamos el modal
    dialog.current.open();
  
  }

  // Resetear

  const handleReset = () => {
    
    // el segundo estado sea el tiempo multiplicado por 1000
    setTimeRemain(targetTime * 1000);
  
  };


  // correr el tiempo
  const handleStart = () => {
    
    // mandamos el tiempo que sera igual al intervalo
    timer.current = setInterval(() => {
      
      // el segundo estado mandara una nueva funcion que dara esa misma funcion menos 10
      setTimeRemain((prevTimeRemaining) => prevTimeRemaining - 10);
  
    }, 10);
  
  };

  // parar el tiempo
  const handleStop = () => {
    
    // mandamos el modal 
    dialog.current.open();

    // y lo borramos
    clearInterval(timer.current);
  
  };

  return (
  
    <>
    
      <ResultModal

        // mandamos la referencia del modal
        ref={dialog}
        
        // el tiempo
        targetTime={targetTime}

        // el useState
        remainingTime={timeRemain}
        
        // el resetear 
        onReset={handleReset}

      >


      </ResultModal>

      <section className="challenge">

        { /* Mandamos el titulo */ }
        <h2>{title}</h2>

        <p className="challenge-time">

        { /* Mandamos el tiempo y le decimos que si ese tiempo es mayor a 1 mostramos la palabra "s" para que sea "seconds" */ }
          {targetTime} second{targetTime > 1 ? "s" : ""}
      
        </p>

        <p>

          { /* Al hacer click le decimos que si esta activo lo detenfa y si no lo inicie */ }
          <button onClick={timerIsActive ? handleStop : handleStart}>

            { /* Si es activo le decimos que pare sino que inicie */ }

            {timerIsActive ? "Stop" : "Start"} Challenge
      
          </button>
      
        </p>
        
        { /* si es activo mostramos la clase del css active sino es indefinido */ }

        <p className={timerIsActive ? "active" : undefined}>

          { /* Si es activo le decimos que pase sino que no lo ha utilizado*/ }

          {timerIsActive ? "Time is running..." : "Timer inactive"}
      
        </p>
      
      </section>
    
    </>
  
  );

};

// mandamos la desustructuracion de onChange, userInput
export const UserInput = ({onChange, userInput}) => {

    return (

        <section id="user-input">
        
            <div className="input-group">
            
                <p>
                
                    <label>Initial Investement</label>

                    <input 
                        
                        type="number" 
                        
                        required 
                        
                        // Mandamos el valor del argumento userInput el primer nivel del estado principal
                        value={userInput.initialInvestment} 
                        
                        // Aqui con el onChange le mandamos una funcion que recibe el evento 
                        // recibe el onChange como "El primer nivel del estado principal" y el valor del evento
                        onChange={(event) => onChange("initialInvestment",event.target.value)}
                    >

                    </input>
                
                </p>

                <p>
                  
                    <label>Annual Investement</label>

                    <input 
                        
                        type="number" 
                        
                        required 
                
                        // Mandamos el valor del argumento userInput el segundo nivel del estado principal
                        value={userInput.annualInvestment} 

                        // Aqui con el onChange le mandamos una funcion que recibe el evento 
                        // recibe el onChange como "El segundo nivel del estado principal" y el valor del evento   
                        
                        onChange={(event) => onChange("annualInvestment",event.target.value)}
                    >

                    </input>
                
                </p>
            
            </div>

            <div className="input-group">
            
                <p>
                    <label>Expected Return</label>

                    <input 
                        
                        type="number" 
                        
                        required 
                        
                        // Mandamos el valor del argumento userInput el tercer nivel del estado principal
                        value={userInput.expectedReturn} 
                        
                        // Aqui con el onChange le mandamos una funcion que recibe el evento 
                        // recibe el onChange como "El tercer nivel del estado principal" y el valor del evento  
                        onChange={(event) => onChange("expectedReturn",event.target.value)}
                    
                    >

                    </input>
                
                </p>

                <p>
                
                    <label>Duration</label>

                    <input 
                        
                        type="number" 
                        
                        required 
                        
                        // Mandamos el valor del argumento userInput el cuarto nivel del estado principal
                        value={userInput.duration} 
                        
                        // Aqui con el onChange le mandamos una funcion que recibe el evento 
                        // recibe el onChange como "El cuarto nivel del estado principal" y el valor del evento  
                        onChange={(event) => onChange("duration",event.target.value)}
                    >

                    </input>
                
                </p>
            
            </div>

        </section>
    );
};

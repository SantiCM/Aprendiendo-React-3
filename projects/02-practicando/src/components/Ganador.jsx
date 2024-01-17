import { BotonReset } from "./BotonReset";
import { Cuadro } from "./Cuadro";

export function GanadorModal({winner, resetGame}) {

    if(winner === null) return null
    
    return (

        <section className="winner">
        
            <div className="text">
        
                <h2>{winner === false ? "Empate" : "Gano"}</h2>

                <header className="win">
                    
                    {winner && <Cuadro>{winner}</Cuadro>}
                
                </header>

                <footer>
       
                 <BotonReset resetGame={resetGame} label="Empezar De Nuevo"></BotonReset>
    
                </footer>
       
            </div>
       
        </section>
     
    );

}
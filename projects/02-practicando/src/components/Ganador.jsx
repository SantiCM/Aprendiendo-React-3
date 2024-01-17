import { BotonReset } from "./BotonReset";
import { Cuadro } from "./Cuadro";

// componente del modal ganador
// damos como props el winner y el reset
export function GanadorModal({winner, resetGame}) {

    // si el winner es igual a null, retornamos nullll, no existe
    if(winner === null) return null
    
    return (

        <section className="winner">
        
            <div className="text">

                {/*Damos que si el winner es igual a falso damos empate, sino, gano */}
                <h2>{winner === false ? "Empate" : "Gano"}</h2>

                <header className="win">

                    {/*Damos que si el winner pasa, damos el cuadro, osea ya sea "x" o "o", damos el ganador */}
                    {winner && <Cuadro>{winner}</Cuadro>}
                
                </header>

                <footer>

                {/*Damos el boton, que se reset de la prop y damos su label  */}
                 <BotonReset resetGame={resetGame} label="Empezar De Nuevo"></BotonReset>
    
                </footer>
       
            </div>
       
        </section>
     
    );

}
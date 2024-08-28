import { calculateInvestmentResults, formatter } from "../util/investment"

// mandamos la desustructuracion 
export const Results = ( { input } ) => {

    // madamos un array vacio    
    const results = []

    // llamamos la variable de la logica y le mandamos el input y el array vacio
    calculateInvestmentResults(input, results)

    // Si los resultado es de 0 mandamos este mensaje al usuario

    if(results.length === 0) {
  
        return <p className='center'>Invalid input data provided</p>
        
    }

    //                         el resultado de la pocision 0 que es el valor a fin de año 
    //                         menos el resultado de la posicion 0 del interes
    //                         menos el resultado de la posicion 0 del annual
    const initialInvestement = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment
  
    return (
        
        <table id="result">

            <thead>

                <tr>

                    <th>Year</th>

                    <th>Investiment Value</th>

                    <th>Interest (Year)</th>

                    <th>Total Interest</th>

                    <th>Invested Capital</th>

                </tr>

            </thead>

            <tbody>
                
                { /* Mandamos la variable de los resultaos mapeado
                    NOTA: Para no tener el warning que el key sea igual al primer argumento
                    ponemos el index para no tenerlo como key 
                
                */ }
                
                {results.map((yearData, index) => {

                    //                       El valor del fin de año menos el anual valor por año menos la variable de arriba
                    const totalInterestValue = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestement

                    //                          El valor de find de año meno el total de intereses
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterestValue
                    
                    return <tr key={index}>

                        <td>{yearData.year}</td>

                        { /* Aqui mandamos llamar el formato creado del archivo js */ }
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>

                        <td>{formatter.format(yearData.interest)}</td>

                        <td>{formatter.format(totalInterestValue)}</td>

                        <td>{formatter.format(totalAmountInvested)}</td>

                    </tr>    

                
                })}

            </tbody>

        </table>

    )

}
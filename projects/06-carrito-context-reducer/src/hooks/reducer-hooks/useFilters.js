import { useContext } from "react"
import { FiltersContext } from "../../context/FiltersContext"

// hook de los filtros 
export function useFilters() {

    // recojemos los filtros del context
    const {filters, setFilters} = useContext(FiltersContext)

    // filtrar produtos, damos como parametro los products
    const filterProducts = (products) => {
        
        // retornamos los productamos y le damos el filter, crea un nuevo array de todos que cumplan las condinciones
        return products.filter(product => {
            
            // retornamos
            return (

                // si el producto del price es mayor al fitro de el precio y pasa
                product.price >= filters.minPrice &&  (

                    // decimos que si el filtro de la categoria es all 
                    // o si no que el producto de la categorya sea igual a los filtros de la categoria
                    filters.category === "all" || product.category === filters.category
                )
            
            )
        
        })
    
    }   

    // retornamos lo que ocupamos
    return { filters,  setFilters, filterProducts}

}
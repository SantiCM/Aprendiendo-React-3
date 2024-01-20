import { createContext, useState } from "react";

// Crear el contexto
export const FiltersContext = createContext({})

// prove acceso al contexto
export const FiltersProvider = ({children}) => {

    // damos un state de los filtros,  la categoria y el minimo Precio
    const [filters, setFilters] = useState({
        
        category: "all", minPrice: 0}
    )

    return (
        
        <FiltersContext.Provider value={{filters, setFilters}}
        
        > {children}
        
        </FiltersContext.Provider>
        
    )

}
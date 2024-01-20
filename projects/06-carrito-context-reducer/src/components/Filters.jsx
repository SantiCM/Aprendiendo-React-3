import { useId, useContext } from "react"
import "./styles/Filters.css"
import { FiltersContext } from "../context/FiltersContext"

// filtros
export function Filters() {

    // recojemos los filtros del context 
    const { filters, setFilters } = useContext(FiltersContext)

    // damos un id unico por cada input de la app
    const minPriceFilterId = useId()

    const categoryFilterId = useId()

    // change del price, recibe el ev
    const handleChangePrice = (ev) => {
        
        // damos el 2 estado del context, damos el prev
        setFilters(prevState => ({
            
            // hacemos la copia del anterior estado
            ...prevState,

            // y decimos que el minPrice es el valor del target
            minPrice: ev.target.value
        
        }))
    
    }

    // igual que arriba
    const handleChangeCategory = (ev) => {

        setFilters(prevState => ({
        
            ...prevState,

            minPrice: ev.target.value
        
        }))
    
    }

    return (
        
        <section className="filters">

            <div>

                {/* htmlFor del id de react */}
                <label htmlFor={minPriceFilterId}>Precio Minimo</label>

                <input 

                    // tipo rango, el id del hook de react al igual que el label
                    type="range"  id={minPriceFilterId} 

                    // minimo 0 y maximo 1000, y el change de arriba, el valor viene de los filtros del minPrice
                    min="0" max="1000" onChange={handleChangePrice} value={filters.minPrice}
                
                />

                <span>${filters.minPrice}</span>

            </div>

            <div>

                {/* htmlFor del id de react */}
                <label htmlFor={categoryFilterId}>Category</label>

                {/* el id del hook de react al igual que el label y el change de arriba */}
                <select id={categoryFilterId} onChange={handleChangeCategory}>

                    <option value="all">Todos Los Productos</option>

                    <option value="laptops">Computadoras</option>

                    <option value="smartphones">Celulares</option>

                </select>

            </div>

        </section>
        
    )

}
import { useId, useContext } from "react"
import "./styles/Filters.css"
import { FiltersContext } from "../context/FiltersContext"

export function Filters() {

    const { filters, setFilters } = useContext(FiltersContext)

    const minPriceFilterId = useId()

    const categoryFilterId = useId()

    const handleChangePrice = (ev) => {
       
        setFilters(prevState => ({
        
            ...prevState,

            minPrice: ev.target.value
        
        }))
    
    }

    const handleChangeCategory = (ev) => {

        setFilters(prevState => ({
        
            ...prevState,

            minPrice: ev.target.value
        
        }))
    
    }

    return (
        
        <section className="filters">

            <div>

                <label htmlFor={minPriceFilterId}>Precio Minimo</label>

                <input type="range" id={minPriceFilterId} min="0" max="1000" onChange={handleChangePrice} value={filters.minPrice}></input>

                <span>${filters.minPrice}</span>

            </div>

            <div>

                <label htmlFor={categoryFilterId}>Category</label>

                <select id={categoryFilterId} onChange={handleChangeCategory}>

                    <option value="all">Todos Los Productos</option>

                    <option value="laptops">Computadoras</option>

                    <option value="smartphones">Celulares</option>

                </select>

            </div>

        </section>
        
    )

}
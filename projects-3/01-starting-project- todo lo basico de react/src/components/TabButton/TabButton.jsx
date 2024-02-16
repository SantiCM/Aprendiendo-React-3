// boton

// mandamos una variable que recibe el children y una propiedad onSelect
export const TabButton = ({children, isSelected, ...props}) => {


    // retornamos ub buton y le decimos que al hacerle click mandara esa propiedad
    return (
        
        <li>

            <button className={isSelected ? "active" : undefined} {...props}>
            
                {children}
            
            </button>
        
        </li>

    )


}

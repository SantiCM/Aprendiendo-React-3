
// Componente del Boton personalizado
// damos el children, el textOnly, la clase y la copia de las props
export const Button = ( { children, textOnly, className, ...props } ) => {

    // damos la clase de css
    // la propiedad css si es true muestra esta clase
    //                                      si falla muestra esta clase
    let cssClasses = textOnly ? "text-button" : "button"

    // a esa clase le añadimos una cadena vacia mas el className
    cssClasses += " " + className
  
    return (

        <>

            { /* Damos la propiedad del boton, le damos su clase dinamica, las props su copia y el children */}

            <button className={cssClasses} {...props}>{children}</button>
        
        </>
        
  
    )

}
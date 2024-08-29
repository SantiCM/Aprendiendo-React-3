// Mandamos una constante que recibe la desestructturacion del evento
export const CalendarEvent = ({event}) => {
    
    // constante de desustructaracion de el title y el user
    const {title, user} = event

    // Mostramos el titulo 
    // Y mostaramos el nombre del usuario que se registro
    return (

        <>
        
            <strong>{title}</strong>

            <strong> - {user.name}</strong>


        </>
  
    )

}
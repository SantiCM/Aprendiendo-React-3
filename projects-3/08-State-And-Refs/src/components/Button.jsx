// Componente del boton
// NOTA: Este boton se utiliza mas que nada para no hacer el mismo estilo 
// asi que se hace para hacer mas flexible en este caso los estilos

// mandamos como argumentos el children y los props
// eslint-disable-next-line react/prop-types
export const Button = ({children, ...props}) => {
    return (
        <button
            // mandamos el estilo que casi todos los botones tendran
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-200"
            // y mandamos la copia de las props
            {...props}
        >
            { /* Y mandamos el children */ }      
            {children}
        </button>
    )
}
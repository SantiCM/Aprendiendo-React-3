import { forwardRef } from "react"

// mandamos la variable del input
// que en este caso ocuapmos la referencia en otro componente por lo cual ocupamos el forwardRef y le damos sus propiedades y la ref

const Input = forwardRef(function Input({texttarea, label, ...props}, ref) {

    // mandamos el estilo por defecto de las entradas
    const classes = "w-full p-2 <border-b-3></border-b-3> rounded-sm border-stone-350 bg-stone-200 text-stone-700 focus:outiline-none focus:border-stone-600"
   
    return (
   
        <p className="flex flex-col gap-1 my-4">
            
            <label className="text-sm font-bold uppercase text-stone-800">{label}</label>

            { /* Si el texttarea es true mostramos el texttarea sino el input */ }

            { texttarea ? 

                // aqui mandamos la referencia del forwardRef y la copia de las props, ademas de las clase por defecto

                <textarea ref={ref} className={classes} {...props}></textarea> 
                    
                : <input ref={ref} className={classes} {...props}></input>
                    
            }

        </p>
   
    )

})

export default Input;
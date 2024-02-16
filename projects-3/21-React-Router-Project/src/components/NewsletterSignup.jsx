import { useFetcher } from 'react-router-dom';

import { useEffect } from 'react';

function NewsletterSignup() {

    // llamar cargador antes de la nav 
    const fetcher = useFetcher()

    // recojemos la data y el estado
    const {data, state} = fetcher

    useEffect(() => {
        
        // si el estdo es igual a idle, osea que ya no estamos ejecutando la carga
        if(state === "idle" && data && data.message) {
            
            // damos la alerta del mensaje
            window.alert(data.message)
        
        }

        // damos como dependencia la data y el estadp
    }, [data, state])
    

    return (
        
        // utilizamos el fecther del form y le damos su accion
        <fetcher.Form method="post" action='/newsletter' className="newsletter">
      
            <input
           
                type="email"
            
                placeholder="Sign up for newsletter..."
            
                aria-label="Sign up for newsletter"
        
            />
        
            <button>Sign up</button>
        
        </fetcher.Form>
    
    );

}

export default NewsletterSignup;
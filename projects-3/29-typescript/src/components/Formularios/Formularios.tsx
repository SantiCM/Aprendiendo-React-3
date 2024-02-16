import { useForm } from "../../hooks/useForm"

// Formularios En TS
export const Formularios = () => {

    // recojemos del hook de useForm, el email, password, onChangeeee
    const { email, password, onChange } = useForm({
        
        // le damos las propiedades
        email: "test@email.com",

        password: "121212"
    
    })

    return (

        <>

            <h3>Formularios</h3>

            <form>

                <input 
                
                    type="text" 
                    
                    className="form-control mt-2 mb-3" 
                    
                    placeholder="Email" 
                    
                    // damos el valor que es el email
                    value={email} 

                    // el change es desustructurar el target, damos la variable
                    // damos el target que viene del valor y el email
                    onChange={({target}) => onChange(target.value, "email")}
                    
                />

                <input 
                
                    type="text" 
                    
                    className="form-control mt-2 mb-3" 
                    
                    placeholder="Password"

                    value={password}

                    onChange={({target}) => onChange(target.value, "password")}
                    
                />

            </form>

        </>
 
    )

}
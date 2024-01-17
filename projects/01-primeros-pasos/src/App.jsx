import "./App.css"
import { TwitterCart } from "./components/TwiiterFollowCart"

// En este caso estamos dando un arreglo de usuarios clasico
const users = [

    {
    
        userName: "santiago_melo",

        name: "Santiago Melo",

        isFollowing: true
    
    },

    {
    
        userName: "pedro_solis",

        name: "Pedro Solis",

        isFollowing: true
    
    },

    {
    
        userName: "alberto_morales",

        name: "Alberto Morales",

        isFollowing: false
    
    },

    {
    
        userName: "pedro_porro",

        name: "Pedro Porro",

        isFollowing: false
    
    },

]

// Diferencia Entre Un Componente Y Un Elemento
// - Componente: Funcion que al ejecutar, nos devuelve un elemento
// -Elemento: Lo que renderiza 
// {cildren} es una prop, que lo que hace es envolver todo lo que tu necesites, sea un texto, un componente, etc, dentro 
// del componente que tiene esa prop
export function App() {

    //const format = (userName) => `${userName}`

    // mandar una constante, que lo va a regresar es un span este caso con mi nombre de usuario
    //const formattedUserName = (<span>@santiago_melo</span>)

    return (

        <div className="App">

            {/* Damos esos usuarios,damos el mapeo y le damos todas las propiedades de ese array*/}
            {users.map(({userName, name, isFollowing}) => (

                // podemos mostrar el componente 
                <TwitterCart

                    /* y darle sus respectivos valores
                    Ahora algo indespensable a la hora de hacer mapeo, es la "key", de hecho el mismo navegador
                    lo pondra como un WARNING, esto debido a que necesita un identificador
                    generalmente debe ser el id de la base de datos, pero en este caso que no hay id, lo correcto
                    es que utilizes un valor del array que sea unico*/
                    key={userName} userName={userName} name={name} initialIsFollowing={isFollowing}

                ></TwitterCart>
                        
            ))}

            {/* IsFolllowing si es true, isFollowing={true} o simplemente mandar su nombre
                perooooo, si es falso, si o si tienes que mandarlo como boolean en false
            */}

            {/* name su props, es la cadena vacia */}

            <TwitterCart  userName="@santiago_melo" name="Santiago Melo" initialIsFollowing={true}></TwitterCart>

            <TwitterCart userName="@santiago_cano" name="Santiago Cano"></TwitterCart>

            {/* 
                {children} en accion
            
                <TwitterCart isFollowing userName="@santiago_juarez">

                <strong>Santiago Juarez</strong>

                <TwitterCart userName="pepe"></TwitterCart>

            </TwitterCart>*/}

            {/* const format = (userName) => `${userName}`
                Dar el props de format y darle la connstante que realizamos arriba 

                <TwitterCart 
                
                    formatUserName={formattedUserName} 
                    sFollowing={true} 
                    userName="@santiago_cano" name="Santiago Cano"
                ></TwitterCart>
                
            */}

            {/* mandamos en una constante todas las props
                const santi = {isFollowing: true, userName: "@santiago_melo15", name: "Santiago Melo"}

                Aplicamos el operator para hacer la copia de esa constante

                <TwitterCart {...santi}></TwitterCart>

            */}

        </div>
        
    )
  
}
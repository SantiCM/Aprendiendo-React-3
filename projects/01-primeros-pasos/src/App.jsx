import "./App.css"
import { TwitterCart } from "./components/TwiiterFollowCart"


// Diferencia Entre Un Componente Y Un Elemento
// - Componente: Funcion que al ejecutar, nos devuelve un elemento
// -Elemento: Lo que renderiza 
// {cildren} es una prop, que lo que hace es envolver todo lo que tu necesites, sea un texto, un componente, etc
export function App() {

    //const format = (userName) => `${userName}`

    // mandar una constante, que lo va a regresar es un span este caso con mi nombre de usuario
    //const formattedUserName = (<span>@santiago_melo</span>)

    return (

        <div className="App">

            {/* IsFolllowing si es true, isFollowing={true} o simplemente mandar su nombre
                perooooo, si es falso, si o si tienes que mandarlo como boolean en false
            */}

            {/* name su props, es la cadena vacia */}
            
            <TwitterCart isFollowing userName="@santiago_melo" name="Santiago Melo"></TwitterCart>

            <TwitterCart isFollowing userName="@santiago_cano" name="Santiago Cano"></TwitterCart>

            {/*<TwitterCart isFollowing userName="@santiago_juarez">

                <strong>Santiago Juarez</strong>

                <TwitterCart userName="pepe"></TwitterCart>

            </TwitterCart>*/}

            {/* Dar el props de format y darle la connstante que realizamos arriba */}

            {/*<TwitterCart formatUserName={formattedUserName} isFollowing={true} userName="@santiago_cano" name="Santiago Cano"></TwitterCart>*/}

        </div>
        
    )
  
}
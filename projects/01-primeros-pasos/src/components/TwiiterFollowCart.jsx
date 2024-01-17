import { useState } from "react"

// Si quieres que una prop, tenga un valor por defecto, cuando no utilizes la prop
// es (nombre de la prop) = (cualquier tipo de valor)

// generalmente las props que sirve para inicializar estado esque el nombre de la prop que tu utilices
// la iniciales con initial(nombre de tu prop, recuerda el camelcase jijijij)
export function TwitterCart ({children, userName , name, initialIsFollowing }) {

    // useState, forma de acutalizar la ui 
    // la primera posicion es el valor
    // el segundo es la forma de actualizar este valor
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // forma de manejar el text, si es follow, damos el text de siguiendo pero si hacemos lo contrario
    // estariamos dejando de seguir, por ende el texto seria el de seguir
    const text = isFollowing ? "Siguiendo" : "Seguir"

    // esto es exactamente lo mismo de arriba solo que con css
    const buttonCss = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    // hacer click, damos la funcion
    const handleClick = () => {

        // decimos que el segundo estado, osea el que actualiza la ui,
        // damos que el primer estado que por defecto es false
        // lo damos con "!" osea que no existe, asi hacemos que cambie el texto y se regrese al valor inicial
        setIsFollowing(!isFollowing)
    
    }

    return (

        // className, forma de llamar la clase del css, la cual puede ser dinamica tambien 
        <article className="tw-followCard">

            <header className="tw-followCard-header">
                
                <img className="tw-followCard-avatar" src="./me.png" alt="Photo User"></img>

                <div className="tw-followCard-info">

                    {/*Aqui mandamos el name de las props */}
                    <strong>{name}</strong>

                    {/*children*/}

                    {/*Aqui mandamos el formart de las props */}
                    <span className="tw-followCard-infoUserName">{userName}</span>

                </div>

            </header>

            <aside>

                {/* Damos el onClick y le damos la funcion de arriba */}
                <button 
                
                    onClick={handleClick} 
                    className={buttonCss}
                    
                >
                    <span className="tw-followCard-text">{text}</span>

                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    
                </button>

            </aside>

        </article>
        
    )

}
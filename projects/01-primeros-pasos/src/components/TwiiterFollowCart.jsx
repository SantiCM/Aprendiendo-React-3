
export function TwitterCart ({children, userName, name, isFollowing}) {

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

                <button className="tw-followCard-button">Seguir</button>

            </aside>

        </article>
        
    )

}
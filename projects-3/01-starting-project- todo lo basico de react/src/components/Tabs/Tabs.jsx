export const Tabs = ( {children, buttons, ButtonsContainer = "menu"} ) => {

    // identificador de componente como valor para accesorio
    //const ButtonsContainer = buttonsContainer

    return (

        <>

            <ButtonsContainer>

                {buttons}

            </ButtonsContainer>

            {children}
    
        </>

    )

}
import { Outlet, useNavigation } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

// Damos el rooot
export const RootLayout = () => {

    //const navigation = useNavigation()

    //navigation.state === "loading"
  
    return (

        <>

            { /*Damos la navegacioon */}

            <MainNavigation>

                <main>

                    {/*navigation.state === "loading" && <p>Loanding</p>*/}

                    {/*Siempre siempre damos el outlet el cual es cerrar*/}

                    <Outlet></Outlet>

                </main>

            </MainNavigation>

        </>

    )

}
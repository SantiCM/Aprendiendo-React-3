import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

// grid por defecto
const drawerWidth = 300
export const JournalLayout = ({children}) => {

    return (
        
        <Box className="animate__animated animate__fadeIn animate__faster" sx={{display: "flex"}}>

            <Navbar drawerWidth={drawerWidth}></Navbar>

            <Sidebar drawerWidth={drawerWidth}></Sidebar>

            <Box 

                component="main"
                sx={{flexGrow: 1, p: 3}}

            >

                <Toolbar></Toolbar>

                {children}

    

            </Box>


        </Box>

    )

}


/* 
Grid: un div con diferentes propiedades
container 
spacing={0} : espacio entre ellos
direction="column" = direccion del flexbox
alignItems="center" 
justifyContent="center"

xs: un style extended en pantallas chicas, medianas y grandes
sx: poner explicitamente el estilo

<TextField: Es como un input donde se ponen todas las propiedades
fullWidth: Todo el tamaño de la pantalla 
Tiene 12 posiciones

<Buton></Buton>
contained: oscuro
outlined: Un boton blanco
text: normal y simple


Link de material
to: a donde quiero que navegue 
component: "Especificar la ruta con el Link de react router
NOTA: Para que no haya problema con el link del materal es:
import { Link as RouterLink } from "react-router-dom"
Link de router, (as) alias, (nombre del componente)

Box: Como otro tipo de div*/
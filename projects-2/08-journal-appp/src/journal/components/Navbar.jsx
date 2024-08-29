import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"

// recibimos la propiedad del ui pero no es necesario
export const Navbar = ({drawerWidth = 300}) => {

    // dispatch
    const dispatch =  useDispatch()

    // Esto es para hacer que nos salgamos al logout osea salir
    const onLogout = () => {
        
        dispatch(startLogout())

        /*

        export const startLogout = () => {
    
            return async( dispatch ) => {
        
            await logoutFirebase();

             eliminar notas del redux si el usuario no esta autenticado
            dispatch(clearNotesLogout())

            dispatch( logout() );

        }

        
        */     
    }   

    return (
        
        <AppBar

            position="fixed" 
        
            sx={{ 
                width: { sm: `calc(100% - ${ drawerWidth }px ) ` },
                ml: {sm: `${drawerWidth}px`}
            }}
        
        >

            <Toolbar>

                <IconButton

                    color="inherit"
                    sx={{mr:2, display:{sm: "none"}}}

                >

                    <MenuOutlined></MenuOutlined>

                </IconButton>

                <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6" noWrap component="div">Journal App</Typography>

                    {/*Salir de la pagina con el boton*/}
                    <IconButton sx={{":hover":{animation: "linear"}}} color="error" onClick={onLogout}>

                        <LogoutOutlined></LogoutOutlined>

                    </IconButton>


                </Grid>


            </Toolbar>

        </AppBar>
           
    )

}


/* 

AppBar 
Toolbar
IconButton
MenuOutlined

*/
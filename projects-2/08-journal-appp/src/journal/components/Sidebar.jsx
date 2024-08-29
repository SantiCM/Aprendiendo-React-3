import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

// recibimos la propiedad del ui (no es necesario)
export const Sidebar = ( { drawerWidth = 300} ) => {

    // destucturamos el displayName que viene del selector del auth
    const {displayName}  = useSelector(state => state.auth) 

    //destucturamos las notas que viene del selector del journal
    const {notes}  = useSelector(state => state.journal) 

    return (
    
        <Box 
            component="nav"
            sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
            
        >

            <Drawer
            
                variant="permanent" // temporary
                open
                sx={
                {
                
                    display: {xs: "block" }, 
                    "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth}
                
                }}

            
            >

                <Toolbar>

                    <Typography 
                        variant="h6" 
                        noWrap 
                        component="div"
                    >
                        {displayName}

                    </Typography>

                </Toolbar>

                <Divider></Divider>

                <List>
                    {/*Recibimos las notas en el sidebar osea que se nuestres con el key obligatorio y hacemos copia de las notas (util)*/}
                    {
                        notes.map(note => ( 
                            <SideBarItem key={note.id} {...note}></SideBarItem>
                        ))
                        
                    }

                </List>

            </Drawer>

        </Box>
            
    )

}
import { Grid, Typography } from "@mui/material"

// Esto es el layout que vamos a estar utilizando constantemente 

// aqui recibimos el children y el title
export const AuthLayout = ({children, title = " "}) => {
  
  return (

    <Grid
      container 
      spacing={0} 
      direction="column" 
      alignItems="center" 
      justifyContent="center"
      sx={{minHeight: "100vh", backgroundColor: "primary.main", padding: 4}}
    >

        <Grid 
            item
            className="box-shadow"
            xs={3}
            sx={{ backgroundColor: "white", padding: 3, borderRadius: 2}}
        >
        
            <Typography variant="h5" sx={{mb:1}}>{title}</Typography>

            {/*children*/ children}

        </Grid>

    </Grid>
  
  )

}
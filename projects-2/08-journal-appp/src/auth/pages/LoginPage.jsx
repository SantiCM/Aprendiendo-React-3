import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { chekingGoggle, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

//Esta variable es para que no haya problema con la renderizacion
const formData =  {
    email: "",

    password: ""

}

export const LoginPage = () => {

    // forma de anular los botones
    const {status, errorMessage} = useSelector(state => state.auth)

    // mandamos llamar el dispatch
    const dispatch = useDispatch()

    // aqui destucturamos email, password, onInputChanhge del formulario que recibe la data (renderizar exitoso)
    const {email, password, onInputChanhge}  = useForm(formData)

    // forma de anular los botones
    // useMemo para memorizar y una funcion del status si es igual al cheking
    // como dependencia el status
    const isAuthenticated =  useMemo(() => status === "cheking", [status])

    // El onsubmit en el form
    // Recibimos el evento
    const onSubmit = (event) => {
        // el evento que va a ser prevenido por defautl
        event.preventDefault()

        // dispatch de hacer que la cuenta pase recibiendo el email y password
        dispatch(startLoginWithEmailPassword({email, password}))
    
    }

    // Google 

    const onGoogleSingIn = (event) => {

        // el evento que va a ser prevenido por defautl
        //event.preventDefault()
        
        // dispatch de entrar con google 
        dispatch(chekingGoggle())
    
    }

  return (

    <AuthLayout title="Login">

        {/* En el form recibimos las animaciones y la propiedad onSubmit que recibe el onsunmit*/}
        <form aria-label="submitForm" className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
       
            <Grid container>
       
                <Grid item xs={12} sx={{ mt: 2 }} md={12} xl={12}>

                    {/*Aqui recibimos el email como name y value y el onChange que viene del formData*/}
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correodegoogle@gmail.com"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChanhge}
                    >

                    </TextField>

                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }} md={12} xl={12}>

                    {/*Aqui recibimos el password como name y value y el onChange que viene del formData*/}
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        fullWidth
                        name="password"
                        inputProps={{
                        
                            "data-testid" : "password"
                        
                        }}
                        value={password}
                        onChange={onInputChanhge}
                    >   
                
                    </TextField>
            
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                    
                    {/*Aqui le decimos que si el display es que el erroMesagge que viene de el auth si es asi no recibe nada y si no es nulo*/}
                    <Grid item xs={12} sm={12} display={ !!errorMessage ? "" : "none" }>

                        {/*este alert es decir que las crendeciales estan fallando de firebase, (que ya existe ese email, etc)*/}
          
                        <Alert severity="error">{errorMessage}</Alert>
  
                    </Grid>

                    <Grid item xs={12} sm={6}>

                        {/*Este buton es el login el cual esta con la propiedad isAuthenticated que hace el cambio al cheking*/}

                        <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth>
                    
                            Login
                    
                        </Button>
                
                    </Grid>

                    <Grid item xs={12} sm={6}>

                        {/*Este buton es el login el cual esta con la propiedad isAuthenticated que hace el cambio al cheking*/}
                        
                        <Button disabled={isAuthenticated} onClick={onGoogleSingIn} variant="contained" fullWidth aria-label="google-btn">
                       
                            <Google></Google>

                            <Typography sx={{ ml: 1 }}>Google</Typography>
                    
                        </Button>

                    </Grid>
                
                </Grid>

                <Grid container direction="row" justifyContent="end">

                    {/*Aqui ponemos un link de la dependecia material ui que el componete que va a tilizar es el router link
                        que va a dirigir a esta ruta/auth/register, (te manda a crear una nueva cuenta)
                    
                    */}
                    
                    <Link component={RouterLink} color="inherit" to="/auth/register">
                    
                        Crea Tu Cuenta
                    
                    </Link>
                
                </Grid>
        
            </Grid>
      
        </form>
    
    </AuthLayout>

  
  );

};

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
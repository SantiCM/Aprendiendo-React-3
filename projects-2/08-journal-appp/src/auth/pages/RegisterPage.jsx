import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingEmailPassword } from "../../store/auth/thunks";

//Esta variable es para que no haya problema con la renderizacion
const formData = {

  email: "" ,
  
  password: "",

  displayName: ""

}

// Las validaciones
const formValidations = {

  // Si el email, su valor es valor que no incluye el @, dice esto
  email: [ ( value)  => value.includes("@"), "El correo debe tener un @ "],

  // Si el password,su valor es valor que incluye que el valor.length es menor a 6 no pasa, dices estooo....
  password: [ ( value)  => value.length >= 6, "La contraseña tiene que tener mas de 6 letras o caracteres"],

  // Si el displayName su valor es valor que incluye que el valor.length es menor a 1 no pasa, dices estooo....
  displayName: [ ( value)  => value.length >= 1, "El nombre es OBLIGATORIO"],

}

export const RegisterPage = () => {

  //mandamos llamar el dispatch
  const dispatch = useDispatch()

  //mandamos llamar un usestate en falso
  const [formSubmitted, setFormSubmitted] = useState(false)

  //desctucturamos el estado y el error con el useSelector del auth
  const {status, errorMessage} = useSelector(state => state.auth)

  // forma de anular los botones
  // useMemo para memorizar y una funcion del status si es igual al cheking
  // como dependencia el status
  const isCheckingAuthenticade = useMemo(() => status === "checking", [status])

  const {

    // mandamos todas las propiedades del auth y del useForm (hook)

    displayName, email, password, onInputChanhge, formState, 
    
    isFormValid, displayNameValid, emailValid, passwordValid 
  
  }  = useForm(formData, formValidations) // que recibe la renderizacion (formData) y las validaciones del formulario (formValidations)


  // El onsubmit en el form
  // Recibimos el evento
  const onSubmit = (event) => {
    
    // el evento que va a ser prevenido por defautl
    event.preventDefault()

    // si no existe el valid retorna
    if(!isFormValid) return

    // el otro estado del useState va a estar en true ahora
    setFormSubmitted(true)
    
    // dispatch de creacion de los campos, mandando el estado inicial de el hook useForm
    dispatch(startCreatingEmailPassword(formState))

  }

  return (
    <AuthLayout title="Register">

      {/*<h1>Form Valid:  {isFormValid ?  "Valido" : "Incorrecto"}</h1>*/}
      
      {/* En el form recibimos las animaciones y la propiedad onSubmit que recibe el onsunmit*/}
      <form className="animate__animated animate__fadeIn animate__faster"  onClick={onSubmit}>
        
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }} md={12} xl={12}>

            {/*Recibe de name y value del displayName
              Resetear el input con onChage
              y el error si el displayNameValid (las validaciones )inventira el valor y retorna lo contrario y dara el primer estado
              y el helpertext que es la alert esque no cumple con los requisitos 
            
            */}
            <TextField
    
              label="Nombre Completo"
              type="text"
              placeholder="Ingresa Tu Nombre Completo"
              fullWidth
              name="displayName"
              value= {displayName}
              onChange={onInputChanhge}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            > 

            </TextField>
      
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} md={12} xl={12}>
            
            {/*Recibe de name y value del email
              Resetear el input con onChage
              y el error si el emailValid (las validaciones )inventira el valor y retorna lo contrario y dara el primer estado
              y el helpertext que es la alert esque no cumple con los requisitos 
            
            */}
            <TextField
        
              label="Correo"
              type="email"
              placeholder="correodegoogle@gmail.com"
              fullWidth
              name="email"
              value= {email}
              onChange={onInputChanhge}
              error={!!emailValid && formSubmitted} 
              helperText={emailValid}
            >

            </TextField>
          
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} md={12} xl={12}>
            
            {/*Recibe de name y value del password
              Resetear el input con onChage
              y el error si el passwordValid (las validaciones )inventira el valor y retorna lo contrario y dara el primer estado
              y el helpertext que es la alert esque no cumple con los requisitos 
            
            */}
            <TextField
          
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              name="password"
              value= {password}
              onChange={onInputChanhge}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            >

            </TextField>
          
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            
            {/*Aqui le decimos que si el display es que el erroMesagge que viene de el auth si es asi no recibe nada y si no es nulo*/}
            <Grid item xs={12} sm={12} display={ !!errorMessage ? "" : "none" }>

              {/*este alert es decir que las crendeciales estan fallando de firebase, (que ya existe ese email, etc)*/}
    
              <Alert severity="error">{errorMessage}</Alert>
      
            </Grid>
          
            <Grid item xs={12} sm={12}>

              {/*Este buton es el login el cual esta con la propiedad isAuthenticated que hace el cambio al cheking*/}
              <Button disabled={isCheckingAuthenticade } type="submit" variant="contained" fullWidth>
          
                Crear Cuenta
          
              </Button>
          
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="end">
            
            
            <Typography sx={{mr: 2}}>¿Ya tienes una cuenta?</Typography>
            
            {/*Mandamos un link del material ui que pasa a ser un routerLink de el router el cual redirecciona a /auth/login (cuenta ya creada) */}
            <Link component={RouterLink} color="inherit" sx={{color: "black", textDecoration: "none"}} to="/auth/login">

              Ingresar
            
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
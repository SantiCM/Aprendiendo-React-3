import { useState } from "react"

// Forma de dar valores de los inputs con el FormData
export default function Signup() {

  // damos un estado para mostrar si la contraseña hace macth con la segunda contraseña en falso
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false)

  // damos una varibale que es para la propiedad form para el onSumbit 
  // damos el evento
  const handleSubmit = (event) => {
        
    // damos el evento prevenido
    event.preventDefault()

    // damos una varibale donde da la nueva dat del event del target
    const fd =  new FormData(event.target)

    // esto es para que al utilizar el getAll en la cassila con su nombre especifico, se muestre
    const acquisitionChannel = fd.getAll("acquisition")

    // damos la data como un objeto que viene de la entradas de la formData que entra
    const data = Object.fromEntries(fd.entries())

    // damos la data de la casilla sera igual a la variable del getAll
    data.acquisition = acquisitionChannel

    // si la data de la contraseña es diferente a la data del id de la primera contraseña
    if(data.password !== data["confirm-password"]) {

      // el segundo estado sera true
      setPasswordAreNotEqual(true)

      // lo retornamos
      return
      
    }

  }    
    
    return (
      
      <form onSubmit={handleSubmit}>
        
        <h2>Welcome on board!</h2>
        
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          
          <label htmlFor="email">Email</label>
          
          <input id="email" type="email" name="email" required/>
        
        </div>
  
        <div className="control-row">
          
          <div className="control">
            
            <label htmlFor="password">Password</label>

            {/*Se pueden utilizar props del navegador como el required = requerido o el minLength: que es minimo lo que una contraseña debe tener*/}

            <input id="password" type="password" name="password" required minLength={6}/>
          
          </div>
  
          <div className="control">
            
            <label htmlFor="confirm-password">Confirm Password</label>
            
            <input
              
              id="confirm-password"
              
              type="password"
              
              name="confirm-password"

              required
            
            />

            <div className="control-error">

              {passwordAreNotEqual && <p>Please macth passwords</p>}

            </div>
          
          </div>
        
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role" required>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control" required>
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control" required>
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control" required>
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions" required>
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }
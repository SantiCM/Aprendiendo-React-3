import { createContext, useContext, useState } from "react";

const Context = createContext({valor: false, toogle: () => {}})

const Provider = ({children}) => {
  const [valor, SetValor ] = useState(false)
  const value = {
    valor, 
    toogle: () => SetValor(!valor),
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>  
  )
}

const App = () => {
  return (
    <Provider>
      <Componente></Componente>
    </Provider>  
  )
}

const Componente = () => {
  const {valor, toogle} = useContext(Context) 

  return(
    <div>
      <label>{valor.toString()}</label>
      <button onClick={toogle}>toogle</button>
    </div>  
  )
}

//export default App
import { createContext, useContext } from "react"; 

const ContextDefault = createContext("valor por defecto")
const Context2 = createContext("valor por defecto 2")


const DefaultProvider = ({children}) => {
  return (
    <ContextDefault.Provider 
    value={"mi valor"}>
    {children}
    </ContextDefault.Provider>  
  )
}

const Contenido = () => {
  const ctx = useContext(ContextDefault)
  return (
    <di>{ctx}</di>  
  )
}

const Contenido2 = () => {
  const ctx = useContext(Context2)
  return (
    <di>{ctx}</di>  
  )
}



function App() {
  return (
    <DefaultProvider>
      <Contenido></Contenido>
      <Contenido2></Contenido2>
    </DefaultProvider>
  );
}

//export default App;

import logo from './logo.svg';
//import './App.css';
import "./main.css";

const estilo2 = {
  boxShadow: "0 5px 3px rgba(0,0,0,.5)"
}

const estilo = (bg = "#222") => ({
  backgroundColor: bg,
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",
})

const Li = ({children}) => {
  return (
    <li className="clase-li">{children}</li>  
  )
}

const App = () => {
  const valor = "feliz"
  return (
    <ul className='clase-css'>
      <Li estado="feliz">Valor de li</Li>
    </ul>
  );
}


/*import Button from "./button"

const arr = [
  "Chanchito feliz",
  "Chanchito triste",
  "Chanchto emocionado"
]
const App = () => {
  // Renderizar un componente
  const miVariable = false

  if (miVariable) {
    return <p>Mi variable dio true</p>
  }
  return (
    <div>
      <h1 onClick={(e) => console.log("click", e)}>Hola mundo</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={() => console.log("clickeado")}>
        Enviar
      </Button>
    </div>
  )  
  
}*/

export default  App
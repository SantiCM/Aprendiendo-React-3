import {useState } from "react"

/// reglas de los hooks:
//  no se llaman en loops, ni condiciones ni nada, siempre el nivel mas alto del componente
// Se llaman en dos partes
// Componente de react
// custom hooks
// cuando creemos un custom hook = use*nombre del hook que le queremos dar*


/*class App extends Component {
  state ={contador: 0}
  incrementar = () => {
    this.setState({contador: this.state.contador + 1})
  }
  render() {
    return (
      <div>
      Contador: {this.state.contador}
      <button onClick={this.incrementar}>Incrementar</button>
    </div> 
    )
  }
}*/

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}


const App = () => {
  const [contador, incrementar] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>  
  )
}


//export default App
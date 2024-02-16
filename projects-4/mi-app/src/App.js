import {Component} from "react"

class Button extends Component {
  constructor(props) {
    super(props)
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("conponent");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("dip update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Desmontando", this.props, this.state);
  }

  render() {
    console.log(" ejecutando metodo renedrizando")
    return (
      <button onClick={() => this.setState({prop: 1})}>Enviar</button>  
    )
  }
}

class App extends Component {
  state = {
    valor: 3
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundo</p>
       {this.state.valor === 3 ?<Button chancito="feliz"/> : null}
        <button
        className={`${this.state.valor}`} 
        onClick={() => this.setState
        ({valor: 2})}>
        Enviar en App
        </button>  
      </div>
    )
  }
}

export default App
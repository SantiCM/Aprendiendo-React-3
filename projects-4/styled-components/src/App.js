import styled, {keyframes} from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div `
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary? "red" : "white"};
  color: ${props => props.primary ? "white" : "red"};
  padding: 10px 15px;
  border: solid 2px red;
  border-raius: 4px;

  &:hover {
    transition: all .2s;
    background-color: green;
    border: solid 2px green;
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }
  .info {
    font-size: 28px;
  }
`

const BlockButton = styled(Button) `
  width: 100%;
  font-size: 24px;
`
const Link = ({className, ...props}) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`


const Input = styled.input.attrs(props => ({
  type: "text",
  color: props.color || "red"
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`

const Password = styled(Input).attrs({
  type: "password"
}) ``

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`

const App= () => {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar<p className="info">Info</p></Button>
      <Button primary>Enviar</Button>
      <Button className="secondary">Enviar</Button>
      <BlockButton primary as="a" href="#">Enviar</BlockButton>
      <BlockButton primary>Enviar</BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con estilo</StyledLink>
      <Input></Input>
      <Password></Password>
      <br>
      </br>
      <Rotar>Estoy girando</Rotar>
    </Content>
  );
}

export default App;

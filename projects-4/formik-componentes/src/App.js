import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import Radio from "./components/Radio";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.lastname.email < 5) {
    errors.email = "El apellido es muy corto";
  }

  if (!values.phone) {
    errors.phone = "Requerido";
  } else if (values.phone < 10) {
    errors.phone = "El numero celular no tiene los suficientes digitos";
  }

  if (!values.accept) {
    errors.accept = "Requerido";
  } 

  if (!values.radio) {
    errors.radio = "Requerido";
  } 
 
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{ name: " ", lastname: " ", email: " ", phone: " ", opciones: " ", accept: "",  radio:" " }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="nombre"></TextInput>
        <br></br>

        <TextInput name="lastname" label="Apellido"></TextInput>
        <br></br>

        <TextInput name="email" label="Correo Electronico"></TextInput>
        
        <br></br>

        <TextInput name="phone" label="Telefono celular"></TextInput>
        <Select label="Registrarse con:" name="Opciones">
          <option value="">Seleccione una opcion</option>
          <option value="google">Google</option>
          <option value="facebook">Facebook</option>
          <option value="github">GitHub</option>
        </Select>
        <br></br>
        <Checkbox name="accept">Aceptar terminos y condiciones </Checkbox>
        <br></br>
        <Radio name="radio" value="documento" label="¿Cómo utilizar este documento?"></Radio>
        <Radio name="radio" value="derecho" label="Derecho aplicable"></Radio>
        <Radio name="radio" value="modelo" label="¿Cómo modificar el modelo?"></Radio>
        <ErrorMessage name="radio"></ErrorMessage>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;

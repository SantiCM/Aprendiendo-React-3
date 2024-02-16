import { useFormik } from "formik";

const validate = (values) => {
  const errors = {}
  if(!values.name) {
  errors.name= "Requerido"
  } else if (values.name.length < 5) {
    errors.name= "El nombre es muy corto"
  }

  if(!values.lastname) {
  errors.lastname= "Requerido"
  } else if (values.lastname.length < 5) {
    errors.lastname= "El apellido es muy corto"
  }

  if(!values.email) {
  errors.email= "Requerido"
  } else if (values.lastname.email < 5) {
    errors.email= "El apellido es muy corto"
  }


  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: " ",
      lastname: " ",
      email: " ",
      phone: " ",
    },
    validate,
    onSubmit: values => console.log(values)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input type="text" {...formik.getFieldProps("name")}>
      </input>
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label>Apellido</label>
      <input  type="text" {...formik.getFieldProps("lastname")}>
      </input>
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}


      <label>Correo Electronico</label>
      <input type="email" {...formik.getFieldProps("email")}>
      </input>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label>Numero Celular</label>
      <input
      name="phone"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.phone}>
      </input>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../Input'
import {memo} from "react"

const MyForm = ({ onSubmit }) => {
  console.log('renderizando my form')
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values)
    resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('Obligatorio'),
        lastname: Yup.string().required('Obligatorio'),
      })}
    >
      <Form>
        <Input name="name" label="Nombre" />
        <Input name="lastname" label="Apellido" />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}

export default memo(MyForm)

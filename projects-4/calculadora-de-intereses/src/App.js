import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup"
import Input from "./components/Input";
import Button from "./components/Button";
import Container  from "./components/Container";
import Section from "./components/Section";
import Balance from "./components/Balance";

const compuntInteres = (depositos, contribucion, años, rate) => {
  let total = depositos
  for (let i = 0; i < años; i++) {
    total = (total + contribucion) * (rate + 1)
  }

  return Math.round(total)
}

const formarter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const App = () => {
  const [balance, setBalance] = useState("")
  const handleSubmit = ({ depositos, contribucion, años, rate}) => {
    const val = compuntInteres(Number(depositos), Number(contribucion), Number(años), Number(rate))
    setBalance(formarter.format(val))
  }
  return (
    <Container>
      <Section>
        <Formik
        initialValues=
        {{
          depositos: "",
          contribucion: "",
          años: "",
          rate: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          depositos:
          Yup.number().required("Obligatorio").typeError("Debe ser un numero"),
          contribucion: Yup.number().required("Obligatorio").typeError("Debe ser un numero"),
          años: Yup.number().required("Obligatorio").typeError("Debe ser un numero"),
          rate: Yup.number().required("Obligatorio").typeError("Debe ser un numero").min(0, "El valor minimo es 0").max(1, "El valor maximo es 1"),
        })}
        >
          <Form>
            <Input name="depositos" label="Deposito Inicial"></Input>
            <Input name="contribucion" label="Contribucion Anual"></Input>
            <Input name="años" label="Años"></Input>
            <Input name="rate" label="Interes Estimado"></Input>
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== "" ? <Balance>Balance Final : {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App

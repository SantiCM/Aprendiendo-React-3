import { Button, Input, Form } from "antd";
import { useState } from "react";

export function FormBase() {
  const [formData2, setFormData2] = useState({
    tema: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData2((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const onFinish = () => {
    console.log("Success:", formData2);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="Nombre"
      labelCol={{ span: 8 }}
      wrapperCol={16}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Tema"
        name="Tema"
        rules={[
          {
            required: true,
            message: "Por favor ingresa un tema",
          },
        ]}
      >
        <Input
          id="tema"
          name="tema"
          value={formData2.tema}
          onChange={(e) => handleChange("tema", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="Password"
        rules={[
          {
            required: true,
            message: "Por favor ingresa una contraseña",
          },
        ]}
      >
        <Input.Password
          id="password"
          name="password"
          value={formData2.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

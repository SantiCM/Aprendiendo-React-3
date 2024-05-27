import { UserSwitchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";

export function InputBase() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Input
        id="name"
        name="name"
        onChange={(e) => handleChange("name", e.target.value)}
        size="medium"
        placeholder="Ingresa tu nombre"
        prefix={<UserSwitchOutlined />}
        style={{ width: "40vh" }}
        value={formData.name}
      />
      <Button>Submit</Button>
    </>
  );
}

import { Button, Space, message } from "antd";

export function MessageBase() {
  const [messageApi, contextHolder] = message.useMessage();

  const Success = () => {
    messageApi.open({
      type: "success",
      content: "Felicidades has pasado",
    });
  };

  const Error = () => {
    messageApi.open({
      type: "error",
      content: "Lo sentimo, fallaste",
    });
  };

  const Warning = () => {
    messageApi.open({
      type: "warning",
      content: "Cuidado, no le vayas al Azul",
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={Success}>Success</Button>
        <Button onClick={Error}>Error</Button>
        <Button onClick={Warning}>Warning</Button>
      </Space>
    </>
  );
}

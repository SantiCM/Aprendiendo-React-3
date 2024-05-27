import { StarTwoTone } from "@ant-design/icons";
import { Typography, Button, Flex } from "antd";
import { useState } from "react";

export function First() {
  const [count, setCount] = useState(0);

  const { Title } = Typography;
  return (
    <>
      <Title level={1} italic={true}>
        Contador: {count}
      </Title>
      <Flex gap="middle">
        <Button
          type="primary"
          size="middle"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </Button>
        <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
      </Flex>
      <StarTwoTone
        rotate={90}
        style={{ fontSize: "50px", color: "red" }}
        spin={true}
      />
    </>
  );
}

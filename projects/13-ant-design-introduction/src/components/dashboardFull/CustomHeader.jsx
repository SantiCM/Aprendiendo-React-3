import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";

const { Title } = Typography;

export function CustomHeader() {
  return (
    <Flex align="center" justify="space-between">
      <Title
        type="secondary"
        level={3}
        style={{ textAlign: "center", position: "relative", bottom: 5 }}
      >
        Welcome, Santiago Melo
      </Title>
      <Flex align="center" gap="middle">
        <Flex justify="center" gap="middle">
          <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
}

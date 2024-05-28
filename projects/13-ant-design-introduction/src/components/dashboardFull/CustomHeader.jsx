import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";

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
        <Search placeholder="Buscar" allowClear />
        <Flex justify="center" gap="middle">
          <MessageOutlined className="icon-header" />
          <NotificationOutlined className="icon-header" />
          <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
}

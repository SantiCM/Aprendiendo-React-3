import { Button, Flex, Image, Menu } from "antd";
import {
  FundOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import CriselLogoImg from "../../../public/crisel-logo.jpeg";

export const dataItems = [
  {
    id: 1,
    icon: <UserOutlined />,
    label: "Usuarios",
    url: "/usuarios",
  },
  {
    id: 2,
    icon: <UserOutlined />,
    label: "Insumos",
    url: "/insumos",
  },
  {
    id: 3,
    icon: <UserOutlined />,
    label: "Categorías",
    url: "/categorías",
  },
  {
    id: 4,
    icon: <UserOutlined />,
    label: "Platillos",
    url: "/platillos",
  },
  {
    id: 5,
    icon: <UserOutlined />,
    label: "Ordenes",
    url: "/ordenes",
  },
  {
    key: 6,
    icon: <FundOutlined />,
    label: "Contabilidad",
    url: "/contabilidad",
  },
];

export function SideBar({ isCollapsed, setIsCollapsed }) {
  return (
    <Flex
      className="container-side-bar"
      vertical
      justify="center"
      align="center"
    >
      <div className="logo">
        <Image src={CriselLogoImg} width={100} height={100} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={dataItems}
      />
      <Flex justify="center" align="center">
        <Button
          type="text"
          icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="triger-btn"
        />
      </Flex>
    </Flex>
  );
}

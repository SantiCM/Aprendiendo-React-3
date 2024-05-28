import { Button, Flex, Menu } from "antd";
import {
  CarryOutOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  RadarChartOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const dataItems = [
  {
    key: 1,
    icon: <UserOutlined />,
    label: "Dashboard",
  },
  {
    key: 2,
    icon: <CarryOutOutlined />,
    label: "Orders",
  },
  {
    key: 3,
    icon: <CarryOutOutlined />,
    label: "Todo",
  },
  {
    key: 4,
    icon: <ProfileOutlined />,
    label: "Profile",
  },
  {
    key: 5,
    icon: <SettingOutlined />,
    label: "Settings",
  },
  {
    key: 6,
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];

export function SideBar({ isCollapsed, setIsCollapsed }) {
  return (
    <Flex vertical justify="center" align="center">
      <div className="logo">
        <RadarChartOutlined />
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

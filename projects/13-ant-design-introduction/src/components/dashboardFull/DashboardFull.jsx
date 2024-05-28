import { Layout, Flex } from "antd";
import { SideBar } from "./SideBar";
import { CustomHeader } from "./CustomHeader";
import { MainContent } from "./MainContent";
import { useState } from "react";
import { SideContent } from "./SideContent";

const { Header, Sider, Content } = Layout;

export function DashboardFull() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        className="sider"
      >
        <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="middle">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}

import { TableOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants";
import { ILayoutProps, MenuItem } from "../../models";
const { Content, Footer, Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("Option 1", URL.Home, <TableOutlined />)];

export default function DefaultLayout(props: ILayoutProps) {
  const { children } = props;
  const navigate = useNavigate();
  function handleSelectItem(data: { key: string }) {
    navigate(data.key);
  }
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout className="h-[100vh]" hasSider={true}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onSelect={handleSelectItem}
        />
      </Sider>
      <Layout className="h-full" hasSider={false}>
        <Content>{children}</Content>
        <Footer className="text-center">
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

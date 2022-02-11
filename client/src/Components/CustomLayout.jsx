import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

function CustomLayout({ children }) {
  return (
    <>
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">خانه</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/category/varzesh">ورزشی</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/category/salamat">سلامت</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/category/eghtesad">اقتصاد</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout className="site-layout" style={{ marginRight: 200 }}>
          <Layout.Content
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              {children}
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Layout.Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default CustomLayout;

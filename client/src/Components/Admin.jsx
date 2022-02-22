import {
  FileTextOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function Admin({ children }) {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ minHeight: "100vh", width: "250px", marginLeft: "30px" }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Authors">
          <Menu.Item key="1">
            <Link to="/admin/addAuthor">افزودن نویسنده</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/authors">نویسنده ها</Link>
          </Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FileTextOutlined />} title="News">
          <Menu.Item key="5">
            <Link to="/admin/addNews">افزودن خبر</Link>
          </Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
      {children}
      {/* <AddNewsForm /> */}
    </>
  );
}

export default Admin;

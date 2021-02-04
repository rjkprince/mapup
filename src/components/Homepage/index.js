import React, { Component } from "react";
import ContentPage from "./Content";
import "antd/dist/antd.css";
import "../../index.css";
import { Layout, Menu, Button, Avatar, Typography } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default class index extends Component {
  state = {
    hideHeader: false,
  };
  render() {
    return (
      <Layout>
        <Sider
          className="sidebar"
          collapsible="true"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            if (window.screen.width > 600) collapsed = true;
            if (collapsed) {
              this.setState({
                hideHeader: false,
              });
            } else {
              this.setState({
                hideHeader: true,
              });
            }
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <div
              className="logo"
              style={this.state.hideHeader ? { display: "none" } : null}
            >
              <Button type="primary">Logo</Button>
            </div>
            <div
              className="loginActions"
              style={this.state.hideHeader ? { display: "none" } : null}
            >
              <Button type="primary">Login</Button>
              <Avatar
                size="large"
                style={{ cursor: "pointer" }}
                icon={<UserOutlined />}
              />
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, height: "100vh" }}
            >
              <ContentPage />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

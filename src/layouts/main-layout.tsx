import * as React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { AppFooter, AppHeader } from "../components";

const { Header, Footer, Content } = Layout;

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <Layout className="main-layout">
      <Header className="header">
        <AppHeader />
      </Header>
      <Content className="content">
        <div className="page-container">
          <Outlet />
        </div>
      </Content>
      <Footer className="footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default MainLayout;

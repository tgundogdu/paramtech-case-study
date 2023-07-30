import * as React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

interface LoginLayoutProps {}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  return (
    <Layout className="login-layout">
      <Outlet />
    </Layout>
  );
};

export default LoginLayout;

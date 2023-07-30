import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, Typography } from "antd";
import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/auth-slice";
import Logo from "../../assets/img/paramtech-logo.svg";
import "./app-header.scss";

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="app-header">
      <div className="logo">
        <img src={Logo} alt="Paramtech" />
      </div>
      <div className="user-info">
        <Avatar icon={<UserOutlined />} />
        <Typography.Text>{auth.user?.fullName}</Typography.Text>
        <Button
          type="default"
          danger
          icon={<PoweroffOutlined />}
          onClick={() => dispatch(logout())}
        />
      </div>
    </div>
  );
};

export default AppHeader;

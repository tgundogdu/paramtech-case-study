import * as React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/auth-slice";
import { useNavigate } from "react-router-dom";
import { Box } from "../components";
import { Form, Input, Button, notification, Typography, Alert } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { CredentialType } from "../utils/types";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [serviceError, setServiceError] = React.useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values: CredentialType) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/signup`, values)
      .then((response) => {
        console.log(response.data);
        dispatch(login(values));
        navigate("/");
      })
      .catch((error) => {
        setServiceError(true);
        api.error({
          message: "Hata oluştu!",
          description: error.response.data,
        });
      });
  };

  const validateMessages = {
    required: "Zorunlu!",
    types: {
      email: "Geçerli bir email adresi girin.",
    },
  };

  return (
    <div className="login-page">
      {contextHolder}
      <Box>
        <Form
          form={form}
          layout="vertical"
          style={{ width: "100%" }}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Adınız Soyadınız"
            tooltip="Zorunlu!"
            name={"fullName"}
            rules={[{ required: true }]}
          >
            <Input size="large" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Email Adresiniz"
            tooltip="Zorunlu!"
            name={"email"}
            rules={[{ required: true, type: "email" }]}
          >
            <Input size="large" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item style={{ marginTop: "50px" }}>
            <Button block type="primary" size="large" htmlType="submit">
              Devam Et
            </Button>
          </Form.Item>
        </Form>
        {serviceError && (
          <Alert
            message="Servis Hatası"
            description={
              <>
                <Typography.Paragraph>
                  Service hata verdiği için doğrudan giriş yapmak için
                  tıklayınız
                </Typography.Paragraph>
                <Button
                  size="small"
                  type="primary"
                  danger
                  onClick={() => {
                    dispatch(
                      login({
                        fullName: "Fake User",
                        email: "fakeuser@gmail.com",
                      })
                    );
                    navigate("/packages");
                  }}
                >
                  Fake Signeup
                </Button>
              </>
            }
            type="warning"
            showIcon
          />
        )}
      </Box>
    </div>
  );
};

export default Login;

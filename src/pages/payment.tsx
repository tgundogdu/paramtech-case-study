import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Form, Input, Typography } from "antd";
import {
  BasketPackageItem,
  Box,
  HTMLViewer,
  Loader,
  PaymentButton,
} from "../components";
import { MaskedInput } from "antd-mask-input";
import { useSelector } from "react-redux";
import { PackageItemType } from "../utils/types";
import { useFetch } from "../hooks";
import { totalBasketAmount } from "../utils/helpers";

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = (props) => {
  const basket = useSelector((state: any) => state.basket);
  const [form] = Form.useForm();
  const { data, loading } = useFetch("payment");
  const navigate = useNavigate();

  const validateMessages = {
    required: "Zorunlu!",
    types: {
      email: "Geçerli bir email adresi girin.",
    },
  };

  const onFinish = (values: any) => {
    const { ids: packageIds, total: totalAmount } = totalBasketAmount(basket);
    const { cardNumber, ...restValues } = values;
    const formattedCardNumber = cardNumber.replaceAll("-", "");
    const paymentValues = {
      ...restValues,
      cardNumber: formattedCardNumber,
      packageIds,
      totalAmount,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/payment`, paymentValues)
      .then(() => {
        navigate("/result");
      });
  };

  return (
    <div className="payment-page">
      <Form
        form={form}
        layout="vertical"
        style={{ width: "100%" }}
        onFinish={onFinish}
        validateMessages={validateMessages}
        autoComplete="off"
      >
        <Row gutter={30}>
          <Col xs={24} sm={24} md={16}>
            <Box>
              <Typography.Title style={{ marginTop: 0 }} level={3}>
                Kart Bilgileri
              </Typography.Title>
              <Card style={{ width: "100%" }}>
                <Row gutter={20}>
                  <Col sm={24} md={12}>
                    <Form.Item
                      label="Kart üzerindeki İsim Soyisim"
                      name={"cardHolderName"}
                      rules={[{ required: true }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Row gutter={20}>
                      <Col sm={24} md={12}>
                        <Form.Item
                          label="Kart Numarası"
                          name={"cardNumber"}
                          rules={[
                            {
                              required: true,
                              pattern: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                              message: "Geçerli card numarası giriniz",
                            },
                          ]}
                        >
                          <MaskedInput
                            size="large"
                            mask={"0000-0000-0000-0000"}
                          />
                        </Form.Item>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Item
                          label="Son Kul. Tar."
                          name={"expireDate"}
                          rules={[
                            {
                              required: true,
                              pattern: new RegExp(
                                "^(0[1-9]|1[0-2])/?([0-9]{2})$"
                              ),
                              message: "Geçerli bir tarih girin.",
                            },
                          ]}
                        >
                          <MaskedInput size="large" mask={"00/00"} />
                        </Form.Item>
                      </Col>
                      <Col sm={12} md={6}>
                        <Form.Item
                          label="CVV/CVC"
                          name={"cvv"}
                          rules={[
                            {
                              required: true,
                              pattern: new RegExp("^[0-9]{3}$"),
                              message: "3 haneli kodu girin",
                            },
                          ]}
                        >
                          <Input.Password size="large" maxLength={3} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>

              <Typography.Title level={3}>Sözleşme</Typography.Title>
              <Card style={{ width: "100%" }}>
                {data && <HTMLViewer data={data.content} />}
                {loading && <Loader />}
              </Card>
            </Box>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Box>
              <Typography.Title level={3} style={{ marginTop: 0 }}>
                Sepetteki Paketler
              </Typography.Title>
              {basket.packages.map((pack: PackageItemType) => (
                <BasketPackageItem data={pack} key={pack.id} />
              ))}
              <Form.Item style={{ marginTop: "30px", width: "100%" }}>
                <PaymentButton form={form} />
              </Form.Item>
            </Box>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Payment;

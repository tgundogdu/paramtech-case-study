import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";
import { Box, Loader, PackageItem } from "../components";
import { useFetch } from "../hooks";
import { PackageItemType } from "../utils/types";
import { selectPackage } from "../redux/basket-slice";
import { useDispatch, useSelector } from "react-redux";
import { totalBasketAmount } from "../utils/helpers";

interface PackagesProps {}

const Packages: React.FC<PackagesProps> = () => {
  const basket = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useFetch("packages");

  return (
    <div className="packages-page">
      <Box>
        <Row gutter={[30, 30]} style={{ width: "100%" }}>
          {data?.map((packageItem: PackageItemType) => {
            const indis = basket.packages.findIndex(
              (p: PackageItemType) => p.id === packageItem.id
            );
            return (
              <Col xs={24} sm={24} md={12} key={packageItem.id}>
                <PackageItem
                  data={packageItem}
                  onSelect={() => dispatch(selectPackage(packageItem))}
                  selected={indis >= 0 ? true : false}
                />
              </Col>
            );
          })}
        </Row>
        <div className="footer">
          <Typography.Text className="total-price">
            Seçilen Paket Tutarı: <b>{totalBasketAmount(basket).total}₺</b>
          </Typography.Text>
          <Button
            type="primary"
            size="large"
            disabled={!basket.packages.length}
            onClick={() => navigate("/payment")}
          >
            Devam Et
          </Button>
        </div>
        {loading && <Loader />}
      </Box>
    </div>
  );
};

export default Packages;

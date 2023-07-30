import * as React from "react";
import { Typography } from "antd";
import "./basket-package-item.scss";

type PackageItemType = {
  imagePath?: string;
  name: string;
  details?: string[];
  tags?: string[];
  amount: number;
  currency: string;
  id: string;
  selected?: boolean;
};

interface BasketPackageItemProps {
  data: PackageItemType;
}

const BasketPackageItem: React.FC<BasketPackageItemProps> = ({ data }) => {
  return (
    <div className="basket-package-item">
      <Typography.Text className="name">{data.name} #{data.id}</Typography.Text>
      <Typography.Text className="price">
        {data.amount}
        {data.currency}
      </Typography.Text>
    </div>
  );
};

export default BasketPackageItem;

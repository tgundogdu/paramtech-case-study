import * as React from "react";
import { Badge, Tag } from "antd";
import { PackageItemType } from "../../utils/types";
import ThumbImage from "../../assets/img/param-thumb-image.png";
import "./package-item.scss";

interface PackageItemProps {
  data: PackageItemType;
  selected?: boolean;
  onSelect: () => void;
}

const PackageItem: React.FC<PackageItemProps> = ({
  data,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`package-item ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="img">
        <img src={ThumbImage} alt="" />
      </div>
      <div className="info">
        <div className="top">
          <div className="name">
            {data.name} #{data.id}
          </div>
          <div className="price">
            {data.amount}
            {data.currency}
          </div>
        </div>
        <div className="details">
          {data.details?.map((detail, index) => (
            <Badge
              status="default"
              text={detail}
              className="badge"
              key={index}
            />
          ))}
        </div>
        <div className="tags">
          {data.tags?.map((tag, index) => (
            <Tag color="default" key={index}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageItem;

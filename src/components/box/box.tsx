import * as React from "react";
import "./box.scss";

export interface BoxProps {
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  alignItems?: string;
  children?: React.ReactNode | string;
}

const Box: React.FC<BoxProps> = ({
  padding = "30px",
  backgroundColor = "#FFFFFF",
  borderRadius = "6px",
  alignItems,
  children,
}) => {
  const boxStyle: React.CSSProperties = {
    padding,
    backgroundColor,
    borderRadius,
    alignItems,
  };
  return (
    <div style={boxStyle} className="box-component">
      {children}
    </div>
  );
};

export default Box;

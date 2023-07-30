import { Spin } from "antd";
import * as React from "react";
import "./loader.scss";

interface LoaderProps {
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  fullscreen = false,
}) => {
  return (
    <div
      className="loading-overlay"
      style={fullscreen ? { position: "fixed" } : {}}
    >
      <Spin />
    </div>
  );
};

export default Loader;

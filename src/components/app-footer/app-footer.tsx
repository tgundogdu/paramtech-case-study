import * as React from "react";
import { HeartFilled } from "@ant-design/icons";

interface AppFooterProps {}

const AppFooter: React.FC<AppFooterProps> = (props) => {
  return (
    <span>
      Made with{" "}
      <HeartFilled
        color="#F00"
        style={{ color: "#FF6666", fontSize: "130%" }}
      />{" "}
      by{" "}
      <a href="https://github.com/tgundogdu" target="_blank" rel="noreferrer">
        Tevrat Gündoğdu
      </a>
    </span>
  );
};

export default AppFooter;

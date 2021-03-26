import { PageHeader, Button, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import "./index.css";
import Logo from "../../resources/logo.png";

const Header = () => {
  return (
    <PageHeader
      className="header_root"
      title={
        <div>
          <img src={Logo} height="48px" />
        </div>
      }
      ghost={false}
      extra={
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x836on4k62z.typeform.com/to/KGopr4aR"
          >
          </a>
        </div>
      }
    />
  );
};

export default Header;

import { PageHeader } from "antd";
import React from "react";
import "./index.css";

const Header = () => {
    return <PageHeader className="header_root" title="Gitraffe" ghost={false} extra={<div className="header_release-date"> Private beta launching soon</div>} />;
};

export default Header;

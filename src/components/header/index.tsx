import { PageHeader, Button, Row } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import React from "react";
import "./index.css";

const Header = () => {
    return (
    <PageHeader className="header_root" title="" ghost={false} extra={
        <a href="https://x836on4k62z.typeform.com/to/KGopr4aR">
            <Button type="primary" shape="round" size={"large"}  style={{background: "linear-gradient(45deg, #ee0979, #ff6a00)", borderWidth: '0', verticalAlign: "middle"}}>
                    Request Access <ArrowRightOutlined />
            </Button>
    </a>} />
    );
};

export default Header;

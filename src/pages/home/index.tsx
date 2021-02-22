import React from "react";
import { Layout, Typography, Row } from "antd";
import "./index.css";
import InteractiveRebaseMac from "../../resources/interactive-rebase-mac.png";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div
      style={{
        background: "#1f1f1f",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", flex: "0 0 auto" }}
      >
        <Title
          style={{ fontSize: "8vh", color: "#a0aec0", textAlign: "center" }}
        >
          Aspirin for Version Control.
        </Title>
      </Row>
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", flex: "0 0 auto" }}
      >
        <div style={{ color: "white", fontSize: "2vh", textAlign: "center" }}>
          <strong>Gitraffe</strong> helps you leverage the power of Git through
          a minimal and intuitive interface.
          <br />
          Minimize hiccups with Interactive Rebase, Cherry Picking, Reflog,
          Commit + History Editing, Quick Actions, and Tailored Workspaces.
        </div>
      </Row>
      <Row
        align="middle"
        justify="center"
        style={{ width: "100", flex: "1 1" }}
      >
        <img src={InteractiveRebaseMac} width="50%" />
      </Row>
    </div>
  );
};

export default Home;

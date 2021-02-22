import React from "react";
import { Layout, Typography, Row } from "antd";
import "./index.css";

const {Content}  = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <Content style={{background: "#1f1f1f", width: "100vw", minHeight: "90vh"}}>
      <Row align="middle" justify="center" style={{width: "100%"}}>
        <Title style={{fontSize: "8vh", color: "#a0aec0"}}>Aspirin for Version Control.</Title>
      </Row>
      <Row align="middle" justify="center" style={{width: "100%"}}>
        <div style={{color: "white", fontSize: "2vh", textAlign: "center"}}><strong>Gitraffe</strong> helps you leverage the power of Git through a minimal and intuitive interface.
        <br/>Minimize hiccups with Interactive Rebase, Cherry Picking, Reflog, Commit + History Editing, Quick Actions, and Tailored Workspaces.</div>
      </Row>
    </Content>
  );
};

export default Home;
